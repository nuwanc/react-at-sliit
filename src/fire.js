import firebase from "firebase";

// Initialize Firebase
let config = {
  apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "react-at-sliit.firebaseapp.com",
  databaseURL: "https://react-at-sliit.firebaseio.com",
  projectId: "react-at-sliit",
  storageBucket: "react-at-sliit.appspot.com",
  messagingSenderId: "xxxxxxxxxxxxxxxxx"
};
const fire = firebase.initializeApp(config);

export default fire;
