// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_WlAb5yuVlA3D6YTRlDaJ8Jujpko7Ypg",
  authDomain: "chatgpt-messenger-1badc.firebaseapp.com",
  projectId: "chatgpt-messenger-1badc",
  storageBucket: "chatgpt-messenger-1badc.appspot.com",
  messagingSenderId: "225106890802",
  appId: "1:225106890802:web:f602a912d4e1f16ce92c2b",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
