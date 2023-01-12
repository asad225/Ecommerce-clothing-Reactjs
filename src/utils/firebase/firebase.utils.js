import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc , collection , writeBatch , query , getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxpWxtPiI1fJ8xWw5ncp5cjxEW5pl8c_E",
  authDomain: "crwn-clothing-88ba5.firebaseapp.com",
  projectId: "crwn-clothing-88ba5",
  storageBucket: "crwn-clothing-88ba5.appspot.com",
  messagingSenderId: "539356865570",
  appId: "1:539356865570:web:9d83e1cfadb81727a2d67b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth,provider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey,objectsToAdd) => {
  const collectionRef = collection(db,collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef,object.title.toLowerCase())
    batch.set(docRef,object)
    
  });
  await batch.commit()
  console.log('done')
}

// export const getCategoriesAndDocuments = async () => {
//   const collectionRef = collection(db,'category')
//   const q = query(collectionRef);

//   const querySnapshot = await getDocs(q)
//   const categoryMap = querySnapshot.docs.reduce((acc,docSnapshot)=>{
//     const {title,items} = docSnapshot.data()
//     acc[title.toLowerCase()] = items;
//     return acc;
//   },{})

//   return categoryMap;

// }
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionInformation
) => {
  const userDocRef = doc(db, "user", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionInformation,
      });
    } catch (err) {
      console.log("error creating the user", err.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }

  return createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }

  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callBack) =>
  onAuthStateChanged(auth, callBack);
