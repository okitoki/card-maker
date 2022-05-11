

import {  getRedirectResult, signInWithRedirect } from "firebase/auth";
// import { onAuthStateChanged,} from "firebase/auth";

class LoginService  {

constructor(auth,provider) {
    this.auth = auth;
    this.provider = provider;
    // console.log(`LoginSercie:${JSON.stringify(this.auth)}, ${JSON.stringify(this.provider)}`)
}

    service = (loginType) => {

        switch (loginType) {
            case "googleLogin":

                this.googleLogin();

                break;

            default:
                break;
        }
    }
            googleLogin(){
                
                signInWithRedirect(this.auth, this.provider);
                console.log('signInWithRedirect');

                getRedirectResult(this.auth)
                        .then((result) => {
                            return result.user.uid;
                        })
                        .catch((error) => {console.log(`errorMessage:${error}`);
                    });

                }


}


export default LoginService;


