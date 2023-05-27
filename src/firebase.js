import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCTYQ2qqDozmrtLe5dzeD0fSXOa2w7XACg",
  authDomain: "cone-572d5.firebaseapp.com",
  projectId: "cone-572d5",
  storageBucket: "cone-572d5.appspot.com",
  messagingSenderId: "403506459361",
  appId: "1:403506459361:web:21325e406b12c465a2bda0"
};

// initialize the firebase using inbuilt initializeApp function
const firebaseApp = firebase.initializeApp(firebaseConfig);

// creating instance for a database
// firestore is a database provided by the firebase
const db = firebaseApp.firestore();

// creating auth for authentication
const auth = firebase.auth();
// console.log(auth)


// now we are exporting them both for the use in other components
export { db, auth };