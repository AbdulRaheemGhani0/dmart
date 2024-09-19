import { initializeApp } from "firebase/app";

import {getAuth,} from "firebase/auth"  


const firebaseConfig = {
  apiKey: "AIzaSyCLkh9ochH7ljzdld78TG9UMytB0WZzG-k",
  authDomain: "ecommerse-store-1454a.firebaseapp.com",
  projectId: "ecommerse-store-1454a",
  storageBucket: "ecommerse-store-1454a.appspot.com",
  messagingSenderId: "838725390012",
  appId: "1:838725390012:web:f5fdbbbbf87506ffa4cab9",
  measurementId: "G-DKRZ35YXE6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);



export {
  
    app,
    auth,

}







