import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8tJ4LOwF9wyAb_R6p-3f_PJSwmtmjT_U",
  authDomain: "registerform-fe0b8.firebaseapp.com",
  projectId: "registerform-fe0b8",
  storageBucket: "registerform-fe0b8.appspot.com",
  messagingSenderId: "208102873866",
  appId: "1:208102873866:web:af9254c1422df670dcf8f3",
  measurementId: "G-DBBLYRP077"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
