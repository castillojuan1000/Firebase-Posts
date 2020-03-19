import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA95-piOynDDZiANHxzz-TRitfdjM5_yOc",
  authDomain: "thinkpiece-41ffc.firebaseapp.com",
  databaseURL: "https://thinkpiece-41ffc.firebaseio.com",
  projectId: "thinkpiece-41ffc",
  storageBucket: "thinkpiece-41ffc.appspot.com",
  messagingSenderId: "33525754246",
  appId: "1:33525754246:web:c34e4905678dd0537ae407",
  measurementId: "G-8HNPPXTMX2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

window.firebase = firebase;

export default firebase