// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0InCOA6m8z1ewyINZVyrN0V1EJdT8Q2I",
  authDomain: "insta-2-clone-de0ee.firebaseapp.com",
  projectId: "insta-2-clone-de0ee",
  storageBucket: "insta-2-clone-de0ee.appspot.com",
  messagingSenderId: "924606073577",
  appId: "1:924606073577:web:b709ebf0dca2ad5c097e78"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
