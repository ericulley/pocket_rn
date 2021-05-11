import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/functions'

var firebaseConfig = {
    apiKey: "AIzaSyB7F8Cte8I28tQbIirBZP2Beol8nFW4MaM",
    authDomain: "pocket-rn-d0d8c.firebaseapp.com",
    projectId: "pocket-rn-d0d8c",
    storageBucket: "pocket-rn-d0d8c.appspot.com",
    messagingSenderId: "362073865392",
    appId: "1:362073865392:web:b807df31c47b0363a60f75"
  }

const app = firebase.initializeApp(firebaseConfig)

const firebaseFunctions = app.functions();
firebaseFunctions.useEmulator('localhost', 5001)

export default firebase

