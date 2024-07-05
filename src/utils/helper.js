import { db } from "../firebase.js";
import { collection, addDoc } from "firebase/firestore";

export const addCollectionToFirestore = async (collectionName, data) => {
  try {
    const collectionRef = collection(db, collectionName);
    const docRef = await addDoc(collectionRef, data);
    docRef && console.log("Data stored Successfully", collectionName);
  } catch (err) {
    console.error("Error while storing data", err.message);
  }
};
