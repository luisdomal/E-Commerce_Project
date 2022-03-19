import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCh5_iVaM0gaAFzkzRL_ftnEdxfHRb6eOY",
    authDomain: "crown-clothing-db-fcf7f.firebaseapp.com",
    projectId: "crown-clothing-db-fcf7f",
    storageBucket: "crown-clothing-db-fcf7f.appspot.com",
    messagingSenderId: "521024067373",
    appId: "1:521024067373:web:231b102ceac0cba7f2e5a4",
    measurementId: "G-HBQ353MY0F"
  };

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
