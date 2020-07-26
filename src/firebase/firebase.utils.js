import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCeJzZp_mTYImIyDA4TzEv-IG6tHv0ibjc",
    authDomain: "react-shop-2fa7a.firebaseapp.com",
    databaseURL: "https://react-shop-2fa7a.firebaseio.com",
    projectId: "react-shop-2fa7a",
    storageBucket: "react-shop-2fa7a.appspot.com",
    messagingSenderId: "79455387134",
    appId: "1:79455387134:web:0f34aa3205ccef4faed4af",
    measurementId: "G-KZVCSSSY61"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;
      //Fetch user
      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = userRef.get();
      //Create if not existant
      if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
        }catch(err){
            console.log('ERROR: Creating user: ', err.message);
        }
      }

      return userRef;

    }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;