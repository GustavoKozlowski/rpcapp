// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLvVsT6vhS4inAPI8DmEeyRrEtdFiTTu4",
  authDomain: "dbusuarios-1010.firebaseapp.com",
  projectId: "dbusuarios-1010",
  storageBucket: "dbusuarios-1010.appspot.com",
  messagingSenderId: "112450055101",
  appId: "1:112450055101:web:ea94fb004fee9efdd2c0d4",
  measurementId: "G-D05CWQ7P0J"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);