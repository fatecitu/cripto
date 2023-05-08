import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

// Firebase config
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
  

/* initialize firebase */
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { auth };


export const database = getFirestore()