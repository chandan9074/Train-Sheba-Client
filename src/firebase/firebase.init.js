// import pakages
import { initializeApp } from "firebase/app";

// import files
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () =>{
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;