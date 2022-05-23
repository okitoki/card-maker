import {  FacebookAuthProvider, getAuth, getRedirectResult, GoogleAuthProvider, 
     signInWithPopup, signInWithRedirect } from "firebase/auth";
import { authService } from "./firebaseconfig";
   


export function googleLoginPop() {
                    const provider = new GoogleAuthProvider();
                    signInWithPopup(authService, provider)
                        .then((result) => {
                        //login
                        console.log(result);
                        }).catch((error) => {


                        });
                        return;               
}
  

export function googleLoginRedirect() {
                    const provider = new GoogleAuthProvider();
                    signInWithRedirect(authService, provider);

                    getRedirectResult(authService)
                        .then((result) => {

                        console.log(result);

                        }).catch((error) => {


                        });
}

export function facebooklogin(){ 
                    const provider = new FacebookAuthProvider();
                    provider.setCustomParameters({
                        'display': 'popup'
                    });

                    signInWithPopup(authService, provider)
                        .then((result) => {
                            const user = result.user;
                            console.log(user);
                            return user;
                        })
                        .catch((error) => {

                        });
                              
}
