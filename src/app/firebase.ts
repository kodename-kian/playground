// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

//Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrBrk__P3pmvjp6yYsqzF2pK5xKi19UcU",
    authDomain: "playground-df0b8.firebaseapp.com",
    projectId: "playground-df0b8",
    storageBucket: "playground-df0b8.appspot.com",
    messagingSenderId: "213116538425",
    appId: "1:213116538425:web:b93b7fb313840bce82c7e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);