import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC_qMxBLgwpL7yOBpBWqBMb8rPxDrzq7_o",
  authDomain: "photonoteapp-39012.firebaseapp.com",
  databaseURL: "https://photonoteapp-39012.firebaseio.com",
  projectId: "photonoteapp-39012",
  storageBucket: "photonoteapp-39012.appspot.com",
  messagingSenderId: "420224563577",
  appId: "1:420224563577:web:72e5da5a4ca2b911ee97a8",
  measurementId: "G-DF0DKZ0J1J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.firestore();

export default firebase;
