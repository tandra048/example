// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCc1jqjA7YYS8Ee-y7C5qI4Yl_xIi2Xf0",
  authDomain: "b9a9-real-estate-tandra048.firebaseapp.com",
  projectId: "b9a9-real-estate-tandra048",
  storageBucket: "b9a9-real-estate-tandra048.appspot.com",
  messagingSenderId: "88579634070",
  appId: "1:88579634070:web:76341ce4641fe9a366e3b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
