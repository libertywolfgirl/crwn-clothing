import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBu2-JQqB3GGxMdmuzZWpcAzNDBWnbXOX4",
  authDomain: "crwn-db-c5331.firebaseapp.com",
  projectId: "crwn-db-c5331",
  storageBucket: "crwn-db-c5331.appspot.com",
  messagingSenderId: "397366064815",
  appId: "1:397366064815:web:40da462a6ba63e5c41865a",
  measurementId: "G-H89Z9E9FSC",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
