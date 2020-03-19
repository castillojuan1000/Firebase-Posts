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

//********************************************************************************************************* */
export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  //!! get reference to the place in the database where the user profile might be.
  const userRef = firestore.doc(`users/${user.uid}`)

  //!! Go fetch document from that location 
  const snapshot = await userRef.get();

  //!! if this snapshot does not exis go ahead and create one 
  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName: displayName,
        email: email,
        createdAt: createdAt,
        ...additionalData
      })
    } catch (error) {
      console.error('Error creating user', error.message)
    }
  }

  return getUserDocument(user.uid)
}
//******************************************************************************* */
export const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.collection('users').doc(uid).get()

    return { uid, ...userDocument.data() }
  } catch (error) {
    console.error(`Error fetching user`, error.message)
  }
}

export default firebase