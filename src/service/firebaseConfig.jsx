// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAds2AgmeGA1wdtfQQh1tn3_UOgU7-R-VY",
  authDomain: "http://itinerai-43c01.firebaseapp.com",
  projectId: "itinerai-43c01",
  storageBucket: "http://itinerai-43c01.firebasestorage.app",
  messagingSenderId: "275144769063",
  appId: "1:275144769063:web:ec3c92eac582917d6a9802",
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);