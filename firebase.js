import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBCj4SzhNi1nMQalXleho27Miwh9wk-jjE",
  authDomain: "docs-nextjs-d98ab.firebaseapp.com",
  projectId: "docs-nextjs-d98ab",
  storageBucket: "docs-nextjs-d98ab.appspot.com",
  messagingSenderId: "237089156184",
  appId: "1:237089156184:web:43e17b9a7df5f6b40b2e2d"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
