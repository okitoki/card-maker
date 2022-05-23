import React, { useEffect, useState } from 'react';
import styles from 'css/cardui.module.css'
import CardItem from './carditem';
import cloudinaryService from 'components/service/cloudinaryservice';
import { deleteUserData, listUserData, writeUserData } from 'components/service/card_repository';
import { onValue, ref } from 'firebase/database';
import { database } from 'components/service/firebaseconfig';

export default function CarduiBody(props) {
const defaulimg = 'http://404-workshop.kr/wp-content/uploads/2022/05/2022_05_10_500.png';
const [
    cardItems={cards:[]}, setCardItems] = useState();
const [loading, setloading] = useState(false);

const uid = props.uId;  
useEffect(()=>{
    const starCountRef = ref(database, uid + '/card/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if(data !== null){
          const _cards = Object.keys(data).map((item)=> data[item]);
      console.log(_cards);
      const _cardItem = {cards:_cards};
      setCardItems(_cardItem);
      }
    });

},[])

// const [avata, setAvata] = useState(defaulimg);
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
            }

        }
        writeUserData(uid,_card);
        return _card;

    });
    
    setCardItems({cards});

}

const onChangeFile = (card,value) =>{
    console.log(`typeof: ${typeof(value)}`);
   if(value !== undefined ){
           const file = value;
           const imgurl = cloudinaryService(file);
           setloading(true);
           imgurl.then((data)=> {
            
            const cards = cardItems.cards.map((_card)=>{
                if(_card.id === card.id){
                    return {...card, fileurl:data}
                }
                return _card;
            })
               setCardItems({cards});
               setloading(false);
           })
       }
}

const addCardItem = () =>{
    // const cards = [...cardItems.cards];
    const idNum = cardItems.cards[cardItems.cards.length-1].id + 1;
    console.log(`id:${idNum}`);
    const card ={id:idNum, name:"", adress:"", phone:"", memo:"", fileurl:defaulimg};
    // cards.push(card);
    // setCardItems(cards);
    // console.log(cardItems);
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
           <header className={styles.buttoncardplus}><button onClick={addCardItem}> 명함 추가하기 </button></header>
           { cardItems.cards.length > 0 ? cardItems.cards.map((item) =>
           <div key={item.id} className={styles.anislide}><CardItem loading={loading} cardItem={item} onChangeValue={onChangeValue} onChangeFile={onChangeFile} removeCardItem={removeCardItem}/></div>) 
           : <div>카드를 추가해주세요.</div>}
        </div>

        </>
    );
}
