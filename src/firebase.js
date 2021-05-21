import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCK3A23pvgQAzfSeUi82FuFFdvuI6Cps-I",
    authDomain: "slack-clone-47a68.firebaseapp.com",
    databaseURL: "https://slack-clone-47a68-default-rtdb.firebaseio.com",
    projectId: "slack-clone-47a68",
    storageBucket: "slack-clone-47a68.appspot.com",
    messagingSenderId: "505915395581",
    appId: "1:505915395581:web:af3b84f634a289fc6f9d94",
    measurementId: "G-RX2DW80H2S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;

