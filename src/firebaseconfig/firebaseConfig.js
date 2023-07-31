// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ1ogYRkM8nn-AK3qopOJ9dX1DRqAKKWc",
  authDomain: "react-e-shop-97f5c.firebaseapp.com",
  projectId: "react-e-shop-97f5c",
  storageBucket: "react-e-shop-97f5c.appspot.com",
  messagingSenderId: "444885075982",
  appId: "1:444885075982:web:f14f349164d6d79447d45f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDrGZ3h2g7t5ySZFon2ZDZS5q9BC1hRCrM",
//   authDomain: "react-shop-fb5f9.firebaseapp.com",
//   projectId: "react-shop-fb5f9",
//   storageBucket: "react-shop-fb5f9.appspot.com",
//   messagingSenderId: "1085213892430",
//   appId: "1:1085213892430:web:dc71e08e75cdcbb621c81f"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app)
// export const storage = getStorage(app)
// export const db = getFirestore(app)

