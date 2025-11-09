import { initializeApp, getApps } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUnfKa5KAcuP9G1_YORN9reaa2DycSsew",
  authDomain: "bytes-dc3f1.firebaseapp.com",
  projectId: "bytes-dc3f1",
  storageBucket: "bytes-dc3f1.firebasestorage.app",
  messagingSenderId: "913218942567",
  appId: "1:913218942567:web:99811a4bfa35eb199746c2"
};

// Initialize Firebase
const currentApps = getApps();
let auth: Auth;

if (!currentApps.length) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
} else {
  const app = currentApps[0];
  auth = getAuth(app);
}

export { auth };