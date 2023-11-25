import {initializeApp} from 'firebase/app';
import { getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyChdrfkAR0mTguWdL3x4AwLdYgFxPEpK70",
    authDomain: "coderhouse-e-commerce-e350d.firebaseapp.com",
    projectId: "coderhouse-e-commerce-e350d",
    storageBucket: "coderhouse-e-commerce-e350d.appspot.com",
    messagingSenderId: "680279000094",
    appId: "1:680279000094:web:6964d7a9ccc7de42229a0f"
  };

  export const app= initializeApp(firebaseConfig);

  export const db = getFirestore(app)
