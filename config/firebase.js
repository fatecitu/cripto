import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

//Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyAy8flm48crl0_Mkep_kNoSIOXBDJC7hvE",
    authDomain: "fatec-cripto-6157b.firebaseapp.com",
    projectId: "fatec-cripto-6157b",
    storageBucket: "fatec-cripto-6157b.appspot.com",
    messagingSenderId: "452111948587",
    appId: "1:452111948587:web:af04cbab3e377ffccf836e"
  };
//Inicializamos o Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()
export {auth}
export const database = getFirestore()