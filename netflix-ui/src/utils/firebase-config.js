  
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDPp8SQo2YM8okgzqn1yLISaaKbfTCJkIE",
  authDomain: "react-netflix-clone-e1618.firebaseapp.com",
  projectId: "react-netflix-clone-e1618",
  storageBucket: "react-netflix-clone-e1618.appspot.com",
  messagingSenderId: "498743458264",
  appId: "1:498743458264:web:ed32afc56804c905845aad",
  measurementId: "G-NLMLW2MP24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app);