import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { doc , getDoc , setDoc , getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBJLhexrRM1ZOGPSXtHm_QiyHJfze7t2Ns",
    authDomain: "voguevariety-db.firebaseapp.com",
    projectId: "voguevariety-db",
    storageBucket: "voguevariety-db.appspot.com",
    messagingSenderId: "764789443043",
    appId: "1:764789443043:web:05ec22f1818651b3ffb8d6"
  };

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth)=>{
  const userDocRef = doc(db,'users',userAuth.uid);
  
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;
  }
