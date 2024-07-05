import { db, auth } from "../firebase";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const storeUserToFireStore = async (uid, displayName, email) => {
  await setDoc(doc(db, "users", uid), {
    displayName,
    email,
  });
};

export const signUpFB = async (displayName, email, password) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  if (user.uid) {
    await storeUserToFireStore(user.uid, displayName, email);
  }
  return user;
};

export const signInFB = async (email, password) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

export const signInWithGoogleFB = async () => {
  const provider = new GoogleAuthProvider();
  const { user } = await signInWithPopup(auth, provider);
  if (user.uid) {
    await storeUserToFireStore(user.uid, user.displayName, user.email);
  }

  return user;
};

export const signOutFB = async () => {
  await signOut(auth);
};

export const getCollectionFB = async (collectionName) => {
  if (collectionName !== "") {
    const collectionRef = collection(db, collectionName);
    const querySnapshot = await getDocs(collectionRef);

    const docs = querySnapshot.docs;

    const data = docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return data;
  }
};
