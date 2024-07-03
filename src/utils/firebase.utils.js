import { db, auth } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

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
