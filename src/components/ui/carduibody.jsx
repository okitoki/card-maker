import React, { useEffect, useState } from 'react';
import styles from 'css/cardui.module.css'
import CardItem from './carditem';
import { deleteUserData, writeUserData } from 'components/service/card_repository';
import { onValue, ref } from 'firebase/database';
import { database } from 'components/service/firebaseconfig';
import CarduiFooter from './carduifooter';
import { Icon } from '@mui/material';


export default function CarduiBody(props) {
const defimage = '/img/eximg.png';
const [
    cardItems={cards:[]}, setCardItems] = useState();
const uid = props.uId;  

useEffect(()=>{
    const starCountRef = ref(database, uid + '/card/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if(data !== null){
            const _cards = Object.keys(data).map((item)=> data[item]).sort((a,b)=>b.id-a.id);
            console.log(_cards);
            const _cardItem = {cards:_cards};
            setCardItems(_cardItem);
      }
    });

},[uid]);

const onChangeValue = (card,value,tag) => { 

    const cards = cardItems.cards.map((_card)=>{

        if(card.id === _card.id){
           switch (tag) {
            case "name":
            return {...card, name:value};

            case "adress":
            return {...card, adress:value};

            case "phone":
            return {...card, phone:value};

            case "memo":
            return {...card, memo:value};

            default:
                break;

            }

        }

        writeUserData(uid,card);
        return _card;

    });
    
    setCardItems({cards});

}
const onChangeFile = (card, data) =>{
            const cards = cardItems.cards.map((_card)=>{
                    if(_card.id === card.id){
                        writeUserData(uid,{...card, fileurl:data});
                        return {...card, fileurl:data}
                    }
                    return _card;
            })
               setCardItems({cards});
       }

const addCardItem = () =>{
    console.log(cardItems.cards.length);
    const idNum = cardItems.cards.length === 0 ? 1 : cardItems.cards[0].id + 1;
    console.log(`id:${idNum}`);
    const card ={id:idNum, name:"", adress:"", phone:"", memo:"", fileurl:defimage};
    writeUserData(uid,card);
}

const removeCardItem = (item) =>{
    const cards = cardItems.cards.filter(value=>value.id !== item.id);
    console.log(cards);
    setCardItems({cards});
    deleteUserData(uid,item);
}
    return (<>
        <div className={styles.cardbody}>
           <header className={styles.buttoncardplus}><Icon color="white" className={styles.btncir}  onClick={addCardItem}>add_circle</Icon></header>
           { cardItems.cards.length > 0 ? cardItems.cards.map((item) =>
           <div key={item.id} className={styles.anislide}><CardItem cardItem={item} onChangeValue={onChangeValue} onChangeFile={onChangeFile} removeCardItem={removeCardItem}/></div>) 
           : <div className={styles.addCard}>카드를 추가해주세요.</div>}
            
        </div>
        <CarduiFooter className={styles.cardFooter}/>
        </>
    );
}
