import React, { useEffect, useState } from 'react';
import styles from 'css/cardui.module.css';
import TextField from '@mui/material/TextField';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import { Input } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { style } from '@mui/system';


export default function CardItem(props) {

    // const defaulimg = 'http://404-workshop.kr/wp-content/uploads/2022/05/2022_05_10_500.png';

    // {id: 0, name:'', adress:'', phone:'', memo:'', fileurl: defaulimg}

    const onChangeValue = (e) =>{
     const value = e.currentTarget.value;
     const type =  e.currentTarget.name;

     props.onChangeValue(props.cardItem,value,type);

    }

    const onChangeFile = (e) =>{
        const file = e.target.files[0];
        console.log(typeof(file));
        props.onChangeFile(props.cardItem,file);
    }

    const removeCard = () =>{
            props.removeCardItem (props.cardItem);
    }


    return (
        <section className={styles.cardsection} >
            <DeleteForeverSharpIcon className={styles.deletbutton} onClick={removeCard}/>
                <div className={styles.cardimg}>
                {props.loading && <CircularProgress />}
                {!props.loading && <img src={props.cardItem.fileurl} width='150px' height='170px'></img>}
                <input accept='image/*' type="file" onChange={onChangeFile} className={styles.filebutton}/></div>
                <ul className={styles.cardItemBg}>
                <li><TextField fullWidth name="name" size="small" label="name" variant="standard" onChange={onChangeValue} value={props.cardItem.name} /></li>
                <li><TextField fullWidth name="adress" size="small" label="adress" variant="standard" multiline onChange={onChangeValue} value={props.cardItem.adress}/></li>
                <li><TextField fullWidth name="phone" size="small" label="phone" variant="standard" onChange={onChangeValue} value={props.cardItem.phone}/></li>
                <li><TextField fullWidth name="memo" size="small" label="memo" variant="standard" multiline onChange={onChangeValue} value={props.cardItem.memo}/></li>

            </ul>
    </section>

    );
}
