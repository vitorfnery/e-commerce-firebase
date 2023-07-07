// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmyLziPXzH616MPzDj69VqlzEn_yRJYEk",
  authDomain: "e-commerce-webshop.firebaseapp.com",
  projectId: "e-commerce-webshop",
  storageBucket: "e-commerce-webshop.appspot.com",
  messagingSenderId: "263114930113",
  appId: "1:263114930113:web:2e927b28de119432692140"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);