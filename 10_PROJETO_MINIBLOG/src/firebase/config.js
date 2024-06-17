import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBN1sCFf55siBFmf0wg0D1-Q2i6P4m91rk",
  authDomain: "miniblog-445fc.firebaseapp.com",
  projectId: "miniblog-445fc",
  storageBucket: "miniblog-445fc.appspot.com",
  messagingSenderId: "295109692698",
  appId: "1:295109692698:web:1966ccb50eff612b0e30a3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };
