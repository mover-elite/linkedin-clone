// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjOlRjAN_NrMzPy5OMJ9DVvYv9iDK-4fg",
  authDomain: "linkedin-clone-f022e.firebaseapp.com",
  projectId: "linkedin-clone-f022e",
  storageBucket: "linkedin-clone-f022e.appspot.com",
  messagingSenderId: "386938971641",
  appId: "1:386938971641:web:507ff2257c185d259cc928",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
