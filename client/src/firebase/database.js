import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC5jT1LPf8MUa4BaoAMTg7kdSm0WJzHauM",
    authDomain: "cardiomyopathy-project-94ccf.firebaseapp.com",
    projectId: "cardiomyopathy-project-94ccf",
    storageBucket: "cardiomyopathy-project-94ccf.appspot.com",
    messagingSenderId: "673422606828",
    appId: "1:673422606828:web:71b24533166e9d155100c9"
};

firebase.initializeApp(firebaseConfig);
const firebaseAuthentication = firebase.auth();
const firebaseFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export {firebaseAuthentication, firebaseFireStore, timestamp};
