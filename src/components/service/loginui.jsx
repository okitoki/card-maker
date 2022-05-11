import React, { useEffect } from 'react';
import LoginEmail  from './loginemail';

// import { useNavigate,  } from 'react-router-dom';
// import { onAuthStateChanged,} from "firebase/auth";

function LoginUi({LOGINSERVER}) {

    // const navigate = useNavigate();
    // const goToBusinessCard =(uid)=>{
    //     navigate('/businesscard',{replace:true,uid});
    //     console.log(`gotoBusinessCard[uid]:${uid}`);
    // }

    useEffect(()=>{
        // const onAuthChange = (auth) => {

        // }

    })

    const google_login = () =>{
        LOGINSERVER.service('googleLogin');
    }
    const imgName = "btn_google_signin" ;   
    const imgUrl = "/images/" + imgName + ".png" ;
            return (
                <div className="card_wrap">
                    <h1>Business Card Maker</h1>
                    <h2>Login</h2>
                    <div>  
                        <LoginEmail></LoginEmail>
                    </div>
                    <img className = "google_login_button_img" onClick = {google_login} src ={imgUrl} alt={imgName} title ={imgName} />
                    <span>Code Your Dream</span>
                </div>
            );
}

export default LoginUi;