import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import { createEmailMember, memberLogin } from 'components/member/member';
import { googleLoginPop } from 'components/service/authservice';

import styled from 'styled-components';

const Boxs = styled(Box)`
  padding-bottom: 40px;
`;
  
function LoginUi() {

const [info={email:'',password:"", uid:""},setInfo] = useState(null);

const handleSubmit = (event) =>{
            event.preventDefault();
            const type = event.target.value;

            const form = document.getElementById('sform');
            const data = new FormData(form);
            const mail = data.get('email');
            const password = data.get('password');
            const info = { email: mail, password: password, uid:''}

            if(type==='joinin'){

              info.uid = createEmailMember(mail,password);

            }else if(type==='signin'){

              info.uid = memberLogin(mail,password);

            }

            setInfo(info);
}

const googleLogin = () =>{
 googleLoginPop();
}
          return (
                <>   
                <div className="card">
                    <header className="head">PHYOONG PHYOONG NAME BOOK</header>
                    <Box component="form" id="sform" noValidate  >
                    <ul>
                        <li>로그인</li>
                        <li><TextField fullWidth size="small" 
                                id="email"
                                label="email"
                                type="email"
                                autoComplete="email"
                                required
                                name="email"
                               /></li>
                        <li><TextField fullWidth size="small"
                                id="password"
                                label="password"
                                type="password"
                                autoComplete="password"
                                required
                                name="password"
                                /></li>
                        <li>
                        <Button fullWidth type="submit" onClick={handleSubmit} value="signin" variant="outlined" color ="primary" disableElevation>sign in</Button> 

                        </li>
                        <li><Button variant="text"  onClick={handleSubmit} value="joinin" type="submit" color ="primary" disableElevation>회원가입</Button> </li>
                        <li><Button color="primary" onClick={googleLogin}>구글로그인</Button></li>
                        <li></li>
                    </ul>
                    </Box>
                </div>

                  </>
            );
}

export default LoginUi;