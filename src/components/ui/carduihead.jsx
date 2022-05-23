import React, { useEffect, useState } from 'react';
import styles from 'css/cardui.module.css'
import moment from 'moment';
import { Button } from '@mui/material';


export default function CarduiHead(props) {

   const user = { name:"오키토키",
                  mail:"okitoki0076@gmail.com"}

    const [currentTime,setCurrentData] = useState(getTime());

    function getTime(){
        const data = moment().startOf('hour').fromNow();
        return data;
    }

    useEffect(()=>{
        setInterval(()=>{ 
                setCurrentData(()=>{
                const time = getTime();
                return time;
            });

        },60000);
       });
    const logOut = ()=>{
        props.logOut();
    }
    return (
        <>
        <section className={styles.cardhead}>
        <div className={styles.sitename}>phong phong name card </div>
        <div className={styles.username}>{user.name}님 로그인중입니다. {currentTime} </div>
        <Button onClick={logOut}>로그아웃</Button>
        </section>
        </>
    );
}
