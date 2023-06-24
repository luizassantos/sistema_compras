import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_TntfOPRJhREXf0XzegNmxtKYv9l-69w",
  authDomain: "sistema-de-compras-at.firebaseapp.com",
  projectId: "sistema-de-compras-at",
  storageBucket: "sistema-de-compras-at.appspot.com",
  messagingSenderId: "181317214453",
  appId: "1:181317214453:web:4fd7ec5b4cc1b5e495a5bc"
};


const app = initializeApp(firebaseConfig);


export default app;
export const auth = getAuth(app);
export const db = getFirestore(app);
