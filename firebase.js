
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCqpGt77dhmRDcG3Yc6wQIwIpkwrALlbI",
  authDomain: "food-app-66f2f.firebaseapp.com",
  projectId: "food-app-66f2f",
  storageBucket: "food-app-66f2f.appspot.com",
  messagingSenderId: "498526731209",
  appId: "1:498526731209:web:a0002e7f8ca42ac01bc618"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); 