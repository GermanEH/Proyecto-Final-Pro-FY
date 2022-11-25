// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSAN2HzVOTztf35D7len4_FxFbm4h5gUk",
  authDomain: "pro-fy-firebase.firebaseapp.com",
  projectId: "pro-fy-firebase",
  storageBucket: "pro-fy-firebase.appspot.com",
  messagingSenderId: "317048978282",
  appId: "1:317048978282:web:1785cff5f680a720b78313",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const auth = firebase.auth();

export { auth };
