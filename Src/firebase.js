// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRJ_-0gXK-8R8zgZTD3RF3uchtkEGIeZ0",
  authDomain: "my-doctor-171e3.firebaseapp.com",
  projectId: "my-doctor-171e3",
  storageBucket: "my-doctor-171e3.appspot.com",
  messagingSenderId: "139096688797",
  appId: "1:139096688797:web:b970741d5aa63a1003ac74",
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
