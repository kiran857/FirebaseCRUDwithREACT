import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDtOwCkkHGpSExiGLyliNI1fzQCC8iOIXI",
  authDomain: "crud-6f143.firebaseapp.com",
  projectId: "crud-6f143",
  storageBucket: "crud-6f143.appspot.com",
  messagingSenderId: "775829162338",
  appId: "1:775829162338:web:2bcfb2d8c2fcbda60fc43b"
};  
  // Initialize Firebase
  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();