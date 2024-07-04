import { db, auth } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const signUpFB = async (displayName, email, password) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  if (user.uid) {
    await setDoc(doc(db, "users", user.uid), {
      displayName,
      email,
    });

    return user;
  }
};

export const signInFB = async (email, password) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

export const signOutFB = async () => {
  await signOut(auth);
};
