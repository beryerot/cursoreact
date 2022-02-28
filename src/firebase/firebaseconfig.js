import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5Y6p0PAQfDG90t-Bt7ZgBNGEw0NtWZZM",
  authDomain: "tienda-de-arte-93ab3.firebaseapp.com",
  projectId: "tienda-de-arte-93ab3",
  storageBucket: "tienda-de-arte-93ab3.appspot.com",
  messagingSenderId: "229355475016",
  appId: "1:229355475016:web:bbbbe3497bab18f97a487d"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

