// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCBCqZb4dWYhoSWQ26ZtuG6nghlT-IT2tk",
  authDomain: "miniblog-d6544.firebaseapp.com",
  projectId: "miniblog-d6544",
  storageBucket: "miniblog-d6544.firebasestorage.app",
  messagingSenderId: "495516124539",
  appId: "1:495516124539:web:63862d4610163f7a1b29de",
  measurementId: "G-XW1MXW7ELE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export { db };