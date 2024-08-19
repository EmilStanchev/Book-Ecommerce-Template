/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const apiKey = import.meta.env.VITE_API_KEY;
const projectId = import.meta.env.VITE_PROJECT_ID;
const appId = import.meta.env.VITE_APP_ID;

const firebaseConfig = {
  apiKey: `${apiKey}`,
  authDomain: "novelnest-49756.firebaseapp.com",
  projectId: `${projectId}`,
  storageBucket: "novelnest-49756.appspot.com",
  messagingSenderId: "756135048067",
  appId: `${appId}`,
  measurementId: "G-MZVF9CD228",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);
