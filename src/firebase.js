// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSV-mlJ1VvwbBHfHqey2ki-SklcLJjZew",
  authDomain: "bancodedados-9dd23.firebaseapp.com",
  projectId: "bancodedados-9dd23",
  storageBucket: "bancodedados-9dd23.appspot.com",
  messagingSenderId: "841418454932",
  appId: "1:841418454932:web:d6967c6c7d24a6a8ae4181"
};

// Initialize Firebase

if(!firebase.apps.lenght){
    firebase.initializeApp(firebaseConfig);
}


export default firebase;