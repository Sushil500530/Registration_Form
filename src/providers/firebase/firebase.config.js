
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4EbFoLMYnUDZruK4Li8HjNL1D0lQOe90",
    authDomain: "registrationform-385ff.firebaseapp.com",
    projectId: "registrationform-385ff",
    storageBucket: "registrationform-385ff.appspot.com",
    messagingSenderId: "276964877164",
    appId: "1:276964877164:web:328dae0c7355c0cbac0949"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
