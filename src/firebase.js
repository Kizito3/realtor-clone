// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtiAwsHrva2uHv8XMYnXGU2gArmRn00MU",
  authDomain: "react-realtor-clone2.firebaseapp.com",
  projectId: "react-realtor-clone2",
  storageBucket: "react-realtor-clone2.appspot.com",
  messagingSenderId: "290703098076",
  appId: "1:290703098076:web:c3f0179d6376a408e4b419"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();