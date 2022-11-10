// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAFS5vc1d9zciV3_8sFhFkmfITgI0hpWV8",
    authDomain: "formula-gray-f1c92.firebaseapp.com",
    projectId: "formula-gray-f1c92",
    storageBucket: "formula-gray-f1c92.appspot.com",
    messagingSenderId: "1073322636239",
    appId: "1:1073322636239:web:4c5e86697341af38b758ba",
    measurementId: "G-E930HQE964"
  };
  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);