
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APPI_KEY,
  authDomain: "ecommercecoder-a6ef5.firebaseapp.com",
  projectId: "ecommercecoder-a6ef5",
  storageBucket: "ecommercecoder-a6ef5.appspot.com",
  messagingSenderId: "152819752781",
  appId: "1:152819752781:web:897b77b475978498b0a104"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)