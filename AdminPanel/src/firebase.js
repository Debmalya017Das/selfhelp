// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC-Rov3IQX0hVgo1II8XOSIjptFv62bnwo",
  authDomain: "selfhelphub-82ace.firebaseapp.com",
  projectId: "selfhelphub-82ace",
  storageBucket: "selfhelphub-82ace.appspot.com", 
  messagingSenderId: "851908593762",
  appId: "1:851908593762:web:24a82f36a5deaa9c78a93b"
};

const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Storage
const storage = getStorage(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

console.log("Firebase app:", app);
console.log("Firestore instance:", db);
console.log("Storage instance:", storage);
console.log("Storage Bucket:", firebaseConfig.storageBucket);

export { db, storage };