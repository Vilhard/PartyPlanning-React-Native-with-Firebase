import * as firebase from "firebase";
import firestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTZyMW1E90pz4t1lqqdB-_SIe7UMGzxfI",
  authDomain: "planningdatabase-15ccc.firebaseapp.com",
  databaseURL: "https://planningdatabase-15ccc.firebaseio.com",
  projectId: "planningdatabase-15ccc",
  storageBucket: "planningdatabase-15ccc.appspot.com",
  messagingSenderId: "1064845336989",
  appId: "1:1064845336989:web:b2b9fb73ea42cb55e50f74",
  measurementId: "G-NF2SHPVMN3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
