import { Routes, Route, useNavigate} from "react-router-dom";
import CardUi from "./components/ui/cardui";
import LoginUi from "./components/ui/loginui";
import {authService } from './components/service/firebaseconfig';
import { onAuthStateChanged, signOut } from "firebase/auth";
import "./css/app.css";
import { useEffect, useState } from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from 'commonjs/theme';
import { memberLogout } from "components/member/member";

export default function App() {
  
  if (process.env.NODE_ENV === "production") {
    console.log = function no_console() {};
    console.warn = function no_console() {};
  }

const navigate = useNavigate();
const [userSignIn={state:false, uid:null}, setUserSignIn] = useState(); 
const auth = authService;

useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
              setUserSignIn(()=>{
                 const userSignin = {state:true, uid:user.uid};
                 return userSignin;
              });
              localStorage.setItem('state',JSON.stringify(true));
        } else {
              signOut(auth).then(
                ()=>{localStorage.removeItem("state");}
              )
        }
      });
},[]);

const uid = userSignIn.uid;
//JSON.parse(localStorage.getItem('uid'));
console.log(`[uid]:${uid}`);
const logOut = () =>{

  memberLogout().then(
    (value)=>{
      setUserSignIn(()=>{
        const userSignin = { state:false,uid:null };
        return userSignin;
     });
    }
  ).catch(
    (err)=>{
      console.log(err);
      console.log("can`t logout!!!");
    }
  )
}

  return (
    <ThemeProvider theme={theme}>        
        <Routes>
            {userSignIn.state?<Route path="/" element = {<CardUi logOut={logOut} uId={userSignIn.uid}/>}/> : <Route path="/" element={<LoginUi/>} /> }
            <Route path="*" element ={<main><p>Loadding....</p></main>} />
        </Routes></ThemeProvider>

  );
}



