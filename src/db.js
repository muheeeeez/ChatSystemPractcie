import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBFA6fqAK90BNfha8tgPXo4Qla70hFN0es",
  authDomain: "smartbrains-6b54b.firebaseapp.com",
  projectId: "smartbrains-6b54b",
  storageBucket: "smartbrains-6b54b.appspot.com",
  messagingSenderId: "532046064190",
  appId: "1:532046064190:web:992c585455a9e61939bf6f",
};
const db = firebase.initializeApp(config);
export default db;
