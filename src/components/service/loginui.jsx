import React, { useEffect } from 'react';
import LoginEmail  from './loginemail';
import { useNavigate,  } from 'react-router-dom';
import { signInWithRedirect, getRedirectResult, onAuthStateChanged } from "firebase/auth";

function LoginUi({auth, provider}) {
 
    const navigate = useNavigate();
    const goToBusinessCard =(uid)=>{
        navigate('/businesscard',{replace:true,uid});
        console.log(`gotoBusinessCard[uid]:${uid}`);
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log(`onAuthStateChange:${uid}`);
                navigate('/businesscard',{replace:true,uid});
            } else {
                navigate('/login');
            }
            });
    })

    const _auth = auth;
    const _provider = provider;
        getRedirectResult(_auth)
        .then((result) => {
            goToBusinessCard(result.user.uid);
        }).catch((error) => {
            console.log(`errorMessage:${error}`);
    });

        const googleLogin = () => {
            signInWithRedirect(_auth, _provider);
        }
            return (
                <div className="card_wrap">
                    <h1>Business Card Maker</h1>
                    <h2>Login</h2>
                    <div>  
                        <LoginEmail auth={auth}></LoginEmail>
                    </div>
                    <button onClick={googleLogin}>Google</button>
                    <span>Code Your Dream</span>
                </div>
            );
}

export default LoginUi;