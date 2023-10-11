// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOhw3XB49hdr6FzyMPss0NpxjTSwY6I1w",
  authDomain: "music24-99757.firebaseapp.com",
  projectId: "music24-99757",
  storageBucket: "music24-99757.appspot.com",
  messagingSenderId: "576748283662",
  appId: "1:576748283662:web:4e0a63e894755a1410595f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db }