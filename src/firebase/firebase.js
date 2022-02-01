import { config } from './config';
import firebase from 'firebase';
import "firebase/storage"

console.log("????????????????????????InitializeApp in Firebase.js")

firebase.initializeApp(config);

console.log("????????????????????????Initializeed in Firebase.js")

export const auth = firebase.auth();

export const fireauth = firebase.auth;

const settings = {timestampsInSnapshots: true};
firebase.firestore().settings(settings);
export const firestore = firebase.firestore();


export const firebasestore = firebase.firestore;
export const storage = firebase.storage()