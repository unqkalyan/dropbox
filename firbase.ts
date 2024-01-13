import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAAwEs4JChGpvoMgQTml192lJxOD-Nv4x8",
    authDomain: "dropbox-642c8.firebaseapp.com",
    projectId: "dropbox-642c8",
    storageBucket: "dropbox-642c8.appspot.com",
    messagingSenderId: "791127782951",
    appId: "1:791127782951:web:c7ccab6d4780ec42c5c002"
  };

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);

  export {db, storage};
