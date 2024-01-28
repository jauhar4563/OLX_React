import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAs73iNy4xWeHhoeuGXVIgYsylabKANT7I",
    authDomain: "fir-6a31e.firebaseapp.com",
    projectId: "fir-6a31e",
    storageBucket: "fir-6a31e.appspot.com",
    messagingSenderId: "856676853758",
    appId: "1:856676853758:web:f55a70be0bd03f9f1602af",
    measurementId: "G-Q5CX0RQFSC"
  };

  export default firebase.initializeApp(firebaseConfig)