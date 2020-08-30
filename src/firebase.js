import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBbCQ3wbGsLFOkWYvXa76r5xiEWqxDY7wM",
  authDomain: "whatsapp-clone-86870.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-86870.firebaseio.com",
  projectId: "whatsapp-clone-86870",
  storageBucket: "whatsapp-clone-86870.appspot.com",
  messagingSenderId: "576608132415",
  appId: "1:576608132415:web:0e12ff5380bc5ece39c78a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
