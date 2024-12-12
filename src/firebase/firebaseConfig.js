import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxx5Z2rGLeP0JvagrB2yx9p_iwtcOKdTk",
  authDomain: "solo-7b61e.firebaseapp.com",
  projectId: "solo-7b61e",
  storageBucket: "solo-7b61e.firebasestorage.app",
  messagingSenderId: "164928036439",
  appId: "1:164928036439:web:b1e77201d399c261934d12",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
