import firebase from 'firebase/app';
import "firebase/firestore";

  
const firebaseConfig = {
    apiKey: "AIzaSyAdRWTwWtpyoJ0inmrQlkJ69HGvOIYDKkw",
    authDomain: "olivinedoc.firebaseapp.com",
    projectId: "olivinedoc",
    storageBucket: "olivinedoc.appspot.com",
    messagingSenderId: "911045787635",
    appId: "1:911045787635:web:bb9d7d97097859cf115c86"
  };
  
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore()

export default db