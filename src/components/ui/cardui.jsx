import React, { useState } from 'react';
import CarduiHead from './carduihead';
import CarduiBody from './carduibody';


const CardUi = (props) => {

    return (
        <>
        <CarduiHead logOut={props.logOut}/>
        <CarduiBody uId={props.uId}/>
        </>
    )
};

export default CardUi;