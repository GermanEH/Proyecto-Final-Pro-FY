import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDHKVzXpNZt9KucmWuaYRTRoBfQPQEJNmQ",
  authDomain: "pro-fy-firebase-f62a1.firebaseapp.com",
  projectId: "pro-fy-firebase-f62a1",
  storageBucket: "pro-fy-firebase-f62a1.appspot.com",
  messagingSenderId: "759953283411",
  appId: "1:759953283411:web:910b3256ebb2f5a2dd69a6"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app); 