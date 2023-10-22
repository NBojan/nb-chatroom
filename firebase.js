import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: "nb-chatroom.firebaseapp.com",
  projectId: "nb-chatroom",
  storageBucket: "nb-chatroom.appspot.com",
  messagingSenderId: "95397395250",
  appId: "1:95397395250:web:a9bc67d972995e8a2cb52b"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();

export { db }