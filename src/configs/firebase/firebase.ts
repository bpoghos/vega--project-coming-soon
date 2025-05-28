import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; 


// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwFF84thNiJi-fsdHhBeJKNnfCT6MP8uQ",
  authDomain: "vega-project-7e934.firebaseapp.com",
  projectId: "vega-project-7e934",
  storageBucket: "vega-project-7e934.firebasestorage.app",
  messagingSenderId: "264535269992",
  appId: "1:264535269992:web:6658d71e209d93428a11dd",
  measurementId: "G-7EC5WEMN59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app); // Firestore instance
const storage = getStorage(app);
const auth = getAuth(app);
export { db , storage, auth};

