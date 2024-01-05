// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA1lmnzkYTXQc8wYuVnOSt6uiHf-ZQ8atE",
    authDomain: "chatapp-25b24.firebaseapp.com",
    projectId: "chatapp-25b24",
    storageBucket: "chatapp-25b24.appspot.com",
    messagingSenderId: "1049708847169",
    appId: "1:1049708847169:web:07c50e13ade13f0ee866c0",
    measurementId: "G-6T52TVXS64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();