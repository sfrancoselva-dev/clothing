import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmyvXSRTC1k8CG3g2-S56bQNozNS27p80",
  authDomain: "clothing-3b0e0.firebaseapp.com",
  projectId: "clothing-3b0e0",
  storageBucket: "clothing-3b0e0.appspot.com",
  messagingSenderId: "742887426059",
  appId: "1:742887426059:web:bc67c11f16e9247b72df0e",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
