import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    /* your config details go inside here */
};

// initialise firebase
firebase.initializeApp(firebaseConfig);
const firebaseAuthentication = firebase.auth;
const firebaseFireStore = firebase.firestore();

export {
    firebaseAuthentication,
    firebaseFireStore,
};
