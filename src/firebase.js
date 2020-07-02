import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBC32wizH2rG0bmaMG5j6bQHH147FajJLI",
  authDomain: "burger-queen-d9a5f.firebaseapp.com",
  databaseURL: "https://burger-queen-d9a5f.firebaseio.com",
  projectId: "burger-queen-d9a5f",
  storageBucket: "burger-queen-d9a5f.appspot.com",
  messagingSenderId: "439696063978",
  appId: "1:439696063978:web:fcafe7dbd475115e6b4693"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase};