// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDT2lSkv9_sff_P1RDtLPyUhKlF3mj89QY',
  authDomain: 'netflix-clone-yt-66034.firebaseapp.com',
  projectId: 'netflix-clone-yt-66034',
  storageBucket: 'netflix-clone-yt-66034.appspot.com',
  messagingSenderId: '266379845089',
  appId: '1:266379845089:web:7c182afaebb17fe81786a0',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }