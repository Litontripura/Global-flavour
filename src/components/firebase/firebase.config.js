// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMZ84hIoZhxY91DvU2KqRwm0Mp3REDxAo",
  authDomain: "chef-recipie-hunter.firebaseapp.com",
  projectId: "chef-recipie-hunter",
  storageBucket: "chef-recipie-hunter.appspot.com",
  messagingSenderId: "141876761272",
  appId: "1:141876761272:web:b56396c55c7dd54cd9da4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app