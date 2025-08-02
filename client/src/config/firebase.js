import { initializeApp } from 'firebase/app';
import {getAuth,GoogleAuthProvider} from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyCs7GO2l3RVmYwlMdKUs8zbV85voLmJHvA",
  authDomain: "uwachatapp.firebaseapp.com",
  projectId: "uwachatapp",
  storageBucket: "uwachatapp.firebasestorage.app",
  messagingSenderId: "748180183824",
  appId: "1:748180183824:web:32e0ce563bf3a5baec2395"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider};