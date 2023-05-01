// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuVJQEtQWETx6hntkt0UKtomrP0xkgQkw",
  authDomain: "chat-yousam.firebaseapp.com",
  databaseURL: "https://chat-yousam-default-rtdb.firebaseio.com",
  projectId: "chat-yousam",
  storageBucket: "chat-yousam.appspot.com",
  messagingSenderId: "125890287638",
  appId: "1:125890287638:web:247decdeedca98d9f1fd37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
