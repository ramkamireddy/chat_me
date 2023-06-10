// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyoJ0kxvAig9J50gr5XXAhJlAUI90_kM4",
  authDomain: "chatapp-d7144.firebaseapp.com",
  projectId: "chatapp-d7144",
  storageBucket: "chatapp-d7144.appspot.com",
  messagingSenderId: "60848029237",
  appId: "1:60848029237:web:9c77bfb3956db8970b7b7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider =new GoogleAuthProvider();
