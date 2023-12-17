// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //apiKey: "AIzaSyCI0iW2_l3IhresdV_qeGKoxUfslo83NlY",
  apiKey: process.env.API_KEY,
  authDomain: "pinterest-yn.firebaseapp.com",
  projectId: "pinterest-yn",
  storageBucket: "pinterest-yn.appspot.com",
  messagingSenderId: "526591021756",
  appId: "1:526591021756:web:a53b6162839862ae7bb6b9",
  measurementId: "G-32NP04JBPR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);