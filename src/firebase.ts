import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCnHdH-ey5SJPQD7claY3h_9ujPDm5yjSg",
    authDomain: "kundenuploads.firebaseapp.com",
    databaseURL: "https://kundenuploads-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "kundenuploads",
    storageBucket: "kundenuploads.appspot.com",
    messagingSenderId: "717919851920",
    appId: "1:717919851920:web:e9a3f45772789d939d0f15"
  };
  /*
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  // Use these for db & auth
  const db = firebaseApp.firestore();
  const storage = firebase.storage();
  const auth = firebase.auth();
  
  export { auth, db, storage };*/
  
  const app = initializeApp(firebaseConfig);
  // Get a reference to the database service
  const database = getDatabase(app);

  let file = {};
const chooseFile = (e: any) => {
file = e.target.files[0];
}
const onSubmit = (event: any) => {
    event.preventDefault();
    let uniqueID = uuid.v4();
    let image = file;
    let imageUrl = `/images/${uniqueID}/${image.name}`; // image.name = name of image uploaded
    const FORM_DATA = {
    imageUrl: imageUrl, // where I am storing my Image
    timestamp: firebase.firestore.FieldValue.serverTimestamp() //Time Stamp the Data
    }
    firebase
    .firestore() // reference cloud firestore
    .collection('form-data') //reference collection
    .add({
    FORM_DATA
    })
    console.log("Uploading Data to Firestore: \n", FORM_DATA)
    }