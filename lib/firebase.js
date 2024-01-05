// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const APİ_KEY = "AIzaSyA1lmnzkYTXQc8wYuVnOSt6uiHf-ZQ8atE"
const AUTH_DOMAIN = "chatapp-25b24.firebaseapp.com"
const PROJECT_ID = "chatapp-25b24"
const STORAGE_BUCKET = "chatapp-25b24.appspot.com"
const MESSAGING_SENDER_ID = "1049708847169"
const APP_ID = "1:1049708847169:web:07c50e13ade13f0ee866c0"
const MEASUREMENT_ID = "G-6T52TVXS64"

const firebaseConfig = {
    apiKey: `${APİ_KEY}`,
    authDomain: `${AUTH_DOMAIN}`,
    projectId: `${PROJECT_ID}`,
    storageBucket: `${STORAGE_BUCKET}`,
    messagingSenderId: `${MESSAGING_SENDER_ID}`,
    appId: `${APP_ID}`,
    measurementId: `${MEASUREMENT_ID}`
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();