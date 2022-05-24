import { authService } from '../service/firebaseconfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

let uId = "";
export function createEmailMember (email,password){
      const auth = authService;
      createUserWithEmailAndPassword(auth,email, password)
        .then((userCredential) => {
              var user = userCredential.user;
              console.log(`CreateUser suceed!! ${user}`);
              uId = user.id;
        }).catch((error) => {
              // var errorCode = error.code;
              var errorMessage = error.message;
              console.log(errorMessage);
        });

      return uId;
}

export function memberLogin (email,password){
      const auth = authService;
      signInWithEmailAndPassword(auth,email, password)
        .then((userCredential) => {

          const user = userCredential.user;
          console.log(`SignIn suceed!!`);
          uId = user.id;
        }).catch((error) => {

              console.log(error);
        });

      return uId;
}

export function memberLogout(){
     const signout =  authService.signOut();
     return signout;
}

export function currentUser(){
                  var user = authService.currentUser;
                  if (user) {
                  // User is signed in.
                  } else {
                  // No user is signed in.
                  }
                              return user;
}