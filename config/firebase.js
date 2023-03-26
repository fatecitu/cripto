import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyA2okLf0f5rP-346KQQPgYN22jWX3GpyEA",
    authDomain: "crud-firebase-expo-20f3e.firebaseapp.com",
    projectId: "crud-firebase-expo-20f3e",
    storageBucket: "crud-firebase-expo-20f3e.appspot.com",
    messagingSenderId: "719927510524",
    appId: "1:719927510524:web:d6f87a51562f60f1bd5e79"
  };
  

/* initialize firebase */
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { auth };


export const database = getFirestore()