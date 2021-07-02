import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAdpg1Yr2-205FQI-C5XAVIDeX4PmWNjm4",
    authDomain: "reactecommerce-grantvanb.firebaseapp.com",
    projectId: "reactecommerce-grantvanb",
    storageBucket: "reactecommerce-grantvanb.appspot.com",
    messagingSenderId: "892689755953",
    appId: "1:892689755953:web:1be3eb8b0e2460ffd6ca10"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;