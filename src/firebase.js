import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC89zUz-9VuKyBOrCIkEC6zEgF5xIB-l0Y",
  authDomain: "linkedin-clone-a4ea5.firebaseapp.com",
  projectId: "linkedin-clone-a4ea5",
  storageBucket: "linkedin-clone-a4ea5.appspot.com",
  messagingSenderId: "578671252776",
  appId: "1:578671252776:web:7ded909f02344ed5aa2c1d"
};
  //initialize firebase app
  const firebaseApp =  firebase.initializeApp(firebaseConfig);

  //db & auth
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage }
  export default db;