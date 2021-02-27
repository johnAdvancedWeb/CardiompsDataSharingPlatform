import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAHA4Q7gGY6SPlwNwAmecxfrCo7MfjKFCU",
    authDomain: "cardiomyopathy-john.firebaseapp.com",
    databaseURL: "https://cardiomyopathy-john-default-rtdb.firebaseio.com",
    projectId: "cardiomyopathy-john",
    storageBucket: "cardiomyopathy-john.appspot.com",
    messagingSenderId: "133580941640",
    appId: "1:133580941640:web:84c8c80bf67a0ed7656b7d",
    measurementId: "G-9XP52XKWN4"
  };

firebase.initializeApp(firebaseConfig);
const firebaseAuthentication = firebase.auth();
const firebaseFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export {firebaseAuthentication, firebaseFireStore, timestamp};
