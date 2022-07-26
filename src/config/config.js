import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD3dSusJAP7uAHbxiTa-Vc_VhORg_tBfGc",
    authDomain: "store-2bee9.firebaseapp.com",
    projectId: "store-2bee9",
    storageBucket: "store-2bee9.appspot.com",
    messagingSenderId: "775571756886",
    appId: "1:775571756886:web:f91b7641cabb17fada28f7",
    measurementId: "G-5M1QG94H38",
    databaseURL: "https://keep.firebaseio.com"
};

// auth with google
export const provider = new GoogleAuthProvider()

// email password auth
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export default auth

// reatime database
export const database = getDatabase(app)