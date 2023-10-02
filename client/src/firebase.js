// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "bharat-estate.firebaseapp.com",
  projectId: "bharat-estate",
  storageBucket: "bharat-estate.appspot.com",
  messagingSenderId: "669739414048",
  appId: "1:669739414048:web:f189149d6c15091abe4245",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
