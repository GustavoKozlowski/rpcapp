
import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDpywUCAG4kRKtD8dMWRHrbK28xHy4rDJ0",
  authDomain: "db-rpc.firebaseapp.com",
  databaseURL: "https://db-rpc-default-rtdb.firebaseio.com",
  projectId: "db-rpc",
  storageBucket: "db-rpc.appspot.com",
  messagingSenderId: "344869532590",
  appId: "1:344869532590:web:618a9b58ec4ec18a6f0e3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
export const database = getDatabase(app);

