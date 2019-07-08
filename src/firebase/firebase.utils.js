import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
 
const config = {
    apiKey: "AIzaSyC3OUChMZ_9rfu3ebVPC9L0P8nylY90NNc",
    authDomain: "crown-db-ed113.firebaseapp.com",
    databaseURL: "https://crown-db-ed113.firebaseio.com",
    projectId: "crown-db-ed113",
    storageBucket: "",
    messagingSenderId: "342327869809",
    appId: "1:342327869809:web:d69f60ec9a4159c0"
  };
 
firebase.initializeApp(config);
 
export const auth = firebase.auth();
export const firestore = firebase.firestore();
 
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
 
export default firebase;