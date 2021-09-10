import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBAVSctD22UMX4bAYwNf51argd1B077tMI",
    authDomain: "connectx-5eb50.firebaseapp.com",
    projectId: "connectx-5eb50",
    storageBucket: "connectx-5eb50.appspot.com",
    messagingSenderId: "658626453826",
    appId: "1:658626453826:web:f84e6e3854ed477d56e8db",
    measurementId: "G-LRTYPF4Q88"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };