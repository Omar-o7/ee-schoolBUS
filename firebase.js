import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js';
import { getFirestore, collection, doc, setDoc, getDoc } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAoCWtKcPku4TDq5X0SAGvIFa5yfuSr6E",
  authDomain: "e-shoolbus.firebaseapp.com",
  projectId: "e-shoolbus",
  storageBucket: "e-shoolbus.appspot.com",
  messagingSenderId: "43076546094",
  appId: "1:43076546094:web:db511e862a586af23979bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export them for use in other files
window.firebase = {
  app,
  auth,
  db,
  collection,
  doc,
  setDoc,
  getDoc
};