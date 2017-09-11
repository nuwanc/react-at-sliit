import firebase from "firebase";

// Initialize Firebase
let config = {
  apiKey: "AIzaSyBffAHwrUowEhFaqO1BG8X8WIZVrde-klc",
  authDomain: "react-at-sliit.firebaseapp.com",
  databaseURL: "https://react-at-sliit.firebaseio.com",
  projectId: "react-at-sliit",
  storageBucket: "react-at-sliit.appspot.com",
  messagingSenderId: "1070649043671"
};
const fire = firebase.initializeApp(config);

export default fire;
