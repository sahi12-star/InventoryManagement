// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoKQs-jFINCPF3833tXx387LaDf1YcofU",
  authDomain: "pantry-tracker-4c985.firebaseapp.com",
  projectId: "pantry-tracker-4c985",
  storageBucket: "pantry-tracker-4c985.appspot.com",
  messagingSenderId: "762733257413",
  appId: "1:762733257413:web:78ed693cb46c58af60c6ac",
  measurementId: "G-7MF4NGKR1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);