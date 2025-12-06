// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDABtS9dFx2T4PXx3S_aoqK5mwLEw4xRaw",
  authDomain: "auth-integration-54341.firebaseapp.com",
  projectId: "auth-integration-54341",
  storageBucket: "auth-integration-54341.firebasestorage.app",
  messagingSenderId: "686229549484",
  appId: "1:686229549484:web:047e0994d7307487c10a09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);