import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

//Firebase Config

//Inicializamos o Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()
export {auth}
export const database = getFirestore()