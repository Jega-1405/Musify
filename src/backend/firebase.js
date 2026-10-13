// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAbEPmSLfqJnVA59CjLHjeUcI0ZxUMgFA",
  authDomain: "tech-haven-music-413.firebaseapp.com",
  projectId: "tech-haven-music-413",
  storageBucket: "tech-haven-music-413.firebasestorage.app",
  messagingSenderId: "636126212872",
  appId: "1:636126212872:web:32536f1ba50bcffa6172bd"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

export let __AUTH=getAuth(firebaseapp);
export let __DB=getFirestore(firebaseapp);