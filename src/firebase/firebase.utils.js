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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef; 
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google Provider Auth

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;