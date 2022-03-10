import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyBjkLlN5QYGlPxdlnQ6otKEK5LwCRb7pjE",
    authDomain: "crwn-bd-d90c8.firebaseapp.com",
    projectId: "crwn-bd-d90c8",
    storageBucket: "crwn-bd-d90c8.appspot.com",
    messagingSenderId: "659184310582",
    appId: "1:659184310582:web:770cc23f275825104cfb97",
    measurementId: "G-GE48GK6NXN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google Provider Auth

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;