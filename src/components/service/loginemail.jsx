import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";


const LoginEmail = ({auth}) => {



    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    
    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
        } catch (error) {
               if(error.message.includes('email-already-in-use')){
                    alert("이미 존재하는 메일입니다.");
                    console.log(error.message);
                }
                else {
                    console.log("가입하지 못했습니다.");
                }
                    
    
        }
    };

    return (
        <div>
            <input
                placeholder="Email"
                onChange={(e) => {
                    setRegisterEmail(e.target.value);
                }}
            />
            <input
                placeholder="EmailPassword"
                onChange={(e) => {
                    setRegisterPassword(e.target.value);
                }}
            />
            <button onClick={register}>회원가입</button>
        </div>
    );
};

export default LoginEmail;