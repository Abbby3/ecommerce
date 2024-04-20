// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM7U97sZNIqxfZmJW79SCe-bHT2K36t_k",
  authDomain: "abbby3-ecommerce.firebaseapp.com",
  projectId: "abbby3-ecommerce",
  storageBucket: "abbby3-ecommerce.appspot.com",
  messagingSenderId: "694565746832",
  appId: "1:694565746832:web:6d5b850e15b8c402974015",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// create and export database

export const db = getFirestore(app);
