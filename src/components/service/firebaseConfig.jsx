import {  initializeApp} from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore} from 'firebase/firestore/lite';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDJ_xxoUYYpydGMDz1X5QLCKV6jJKXAZtE",
  authDomain: "foo-uncle.firebaseapp.com",
  databaseURL: "https://foo-uncle-default-rtdb.firebaseio.com",
  projectId: "foo-uncle",
  storageBucket: "foo-uncle.appspot.com",
  messagingSenderId: "187020317412",
  appId: "1:187020317412:web:ef1f3efdd88918c8f292f1",
  measurementId: "G-SXL2SBDBX7"
};

console.log("firebaseconfig : call");
export const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase);
export const authService = getAuth(firebase);
export const database = getDatabase(firebase);
