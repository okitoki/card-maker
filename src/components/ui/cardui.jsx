import React from 'react';
import styles from 'css/cardui.module.css'
import CarduiHead from './carduihead';
import CarduiFooter from './carduifooter';
import CarduiBody from './carduibody';
import {getKeyValue} from 'commonjs/util';

const CardUi = (props) => {
    

    return (
        <>
        <CarduiHead logOut={props.logOut}/>
        <CarduiBody uId={props.uId}/>
        <CarduiFooter/>
        </>
    )
};

export default CardUi;