// import React , { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import BusinessCard from "./components/card/businesscard";
import LoginUi from "./components/service/loginui";
import { initializeApp } from "firebase/app";
import { getAuth,  } from "firebase/auth"; // 코드 추가
import firebaseConfig from './components/service/firebaseConfig';
import { GoogleAuthProvider} from "firebase/auth";

import "./css/app.css";

export default function App() {
 
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

  return (
    <>
        <Routes>
            <Route path="/" element={<LoginUi auth = {auth} provider ={provider}/>} />
            <Route path="/login" element={<LoginUi auth = {auth} provider ={provider}/>} />
            <Route path="/businesscard" element = {<BusinessCard />} />
            <Route path="*" element ={<main><p>404 page Error</p></main>} />
        </Routes>
    </>
  );
}



