// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCBTkbXieuGEyHOCMni1DD3H6-l6gBi88",
  authDomain: "busticket-c11f0.firebaseapp.com",
  projectId: "busticket-c11f0",
  storageBucket: "busticket-c11f0.appspot.com",
  messagingSenderId: "582286808479",
  appId: "1:582286808479:web:386dff28b921b5b4d6d9aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Yetkilendirme kurulumu
export const auth= getAuth(app);

 