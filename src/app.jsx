// import React , { useState } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import BusinessCard from "./components/card/businesscard";
import LoginUi from "./components/service/loginui";
import { initializeApp } from "firebase/app";
import LoginService  from './components/service/loginservice';
import { useNavigate,  } from 'react-router-dom';

import "./css/app.css";

export default function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyDJ_xxoUYYpydGMDz1X5QLCKV6jJKXAZtE",
    authDomain: "foo-uncle.firebaseapp.com",
    projectId: "foo-uncle",
    storageBucket: "foo-uncle.appspot.com",
    messagingSenderId: "187020317412",
    appId: "1:187020317412:web:ef1f3efdd88918c8f292f1",
    measurementId: "G-SXL2SBDBX7"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const user = auth.currentUser;
const provider = new GoogleAuthProvider();

const loginService = new LoginService(auth,provider);

// const navigate = useNavigate();
// const goToBusinessCard =(uid)=>{
//     navigate('/businesscard',{replace:true,uid});
//     console.log(`gotoBusinessCard[uid]:${uid}`);
// }

const navigate = useNavigate();

  useEffect(()=>{
          const goToBusinessCard =(uid)=>{
          navigate('/businesscard',{replace:true,uid});
          // console.log(`gotoBusinessCard[uid]:${uid}`);
          }
          onAuthStateChanged(auth, (user) => {
            if (user) {
              // console.log(`onAuthState:${user}`);
              const uid = user.uid;
              goToBusinessCard(uid);

            } else {
              // User is signed out
              // ...
            }
          });
  });
  

  return (
    <>
        <Routes>
            <Route path="/" element={<LoginUi LOGINSERVER={loginService}/>} />
            <Route path="/login" element={<LoginUi LOGINSERVER={loginService}/>} />
            <Route path="/businesscard" element = {<BusinessCard />} />
            <Route path="*" element ={<main><p>404 page Error</p></main>} />
        </Routes>
    </>
  );
}



