import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyCti-Klxc7WcTZbDGhIeWEBHZv8pMKNae8",
    authDomain: "crwn-db-afc87.firebaseapp.com",
    databaseURL: "https://crwn-db-afc87.firebaseio.com",
    projectId: "crwn-db-afc87",
    storageBucket: "crwn-db-afc87.appspot.com",
    messagingSenderId: "1060035826296",
    appId: "1:1060035826296:web:58b0e060e705640766938d",
    measurementId: "G-Q3JS0FCFGH"
  };

   // giriş yapan kullanıcının profil bilgilerini oluşturma
  export const createUserProfileDocument = async(userAuth,additionalData) => {

    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {

         await userRef.set({
             displayName,
             email,
             createdAt,
             ...additionalData
         })

        }catch(error){
             console.log('error',error.message);
        }
    }
      return userRef;
  }

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

    // AUTHENTICATION
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;


