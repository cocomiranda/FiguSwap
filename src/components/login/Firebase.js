// import { initializeApp } from "firebase/app";
// import "firebase/database"

// const firebaseConfig = {
//     apiKey: "AIzaSyDDZcrXRYk3_7hf7rsO6jz9YA2tno-DRSg",
//     authDomain: "figuswap.firebaseapp.com",
//     databaseURL: "https://figuswap-default-rtdb.firebaseio.com",
//     projectId: "figuswap",
//     storageBucket: "figuswap.appspot.com",
//     messagingSenderId: "143399267512",
//     appId: "1:143399267512:web:0d26faa93b11039805184d",
//     measurementId: "G-9Y8FE40F8Y"
// };

// const app = initializeApp(firebaseConfig);


// import firebase from "firebase";
// import "firebase/firestore";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDDZcrXRYk3_7hf7rsO6jz9YA2tno-DRSg",
//     authDomain: "figuswap.firebaseapp.com",
//     databaseURL: "https://figuswap-default-rtdb.firebaseio.com",
//     projectId: "figuswap",
//     storageBucket: "figuswap.appspot.com",
//     messagingSenderId: "143399267512",
//     appId: "1:143399267512:web:20b52674b003f83105184d",
//     measurementId: "G-57D434TN64"
//   };

// firebase.initializeApp(firebaseConfig)
// export default firebase


// import firebase from "firebase/app"
// // import "firebase/database"
// var firebaseConfig = {
//     apiKey: "AIzaSyDDZcrXRYk3_7hf7rsO6jz9YA2tno-DRSg",
//     authDomain: "figuswap.firebaseapp.com",
//     databaseURL: "https://figuswap-default-rtdb.firebaseio.com",
//     projectId: "figuswap",
//     storageBucket: "figuswap.appspot.com",
//     messagingSenderId: "143399267512",
//     appId: "1:143399267512:web:20b52674b003f83105184d",
//     measurementId: "G-57D434TN64"
// }
// firebase.initializeApp(firebaseConfig);
// // const databaseRef = firebase.database().ref()
// // export const notesRef = databaseRef.child("usuarios")
// export default firebase


// import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//   apiKey: "AIzaSyDDZcrXRYk3_7hf7rsO6jz9YA2tno-DRSg",
//   authDomain: "figuswap.firebaseapp.com",
//   databaseURL: "https://figuswap-default-rtdb.firebaseio.com",
//   projectId: "figuswap",
//   storageBucket: "figuswap.appspot.com",
//   messagingSenderId: "143399267512",
//   appId: "1:143399267512:web:20b52674b003f83105184d",
//   measurementId: "G-57D434TN64"
// };
// const app = initializeApp(firebaseConfig);
// export default app


import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDDZcrXRYk3_7hf7rsO6jz9YA2tno-DRSg",
    authDomain: "figuswap.firebaseapp.com",
    databaseURL: "https://figuswap-default-rtdb.firebaseio.com",
    projectId: "figuswap",
    storageBucket: "figuswap.appspot.com",
    messagingSenderId: "143399267512",
    appId: "1:143399267512:web:20b52674b003f83105184d",
    measurementId: "G-57D434TN64"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'usuarios');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  console.log(cityList)
  return cityList;
}
