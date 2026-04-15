// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth ,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, collection, getDocs, doc, deleteDoc, updateDoc, addDoc} from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Import Storage
import { getMessaging, getToken, onMessage } from "firebase/messaging";



const firebaseConfig = {
  apiKey: "AIzaSyDnPUvxf3v9WRAFUNL9-9D8xW89OsS1D0c",
  authDomain: "furniture-store-2-a3c95.firebaseapp.com",
  projectId: "furniture-store-2-a3c95",
  storageBucket: "furniture-store-2-a3c95.firebasestorage.app",
  messagingSenderId: "220410063301",
  appId: "1:220410063301:web:16e3788350428d9cb2c3ac",
  measurementId: "G-WXGGCLTGSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const messaging = getMessaging(app);
const provider = new GoogleAuthProvider();




export {  app,
  auth,
  analytics,
  db,
  storage,
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  addDoc,
  GoogleAuthProvider,
  signInWithPopup,
  messaging, getToken, onMessage ,provider
 
}
