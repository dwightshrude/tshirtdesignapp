
import firebase from 'firebase/app';
import 'firebase/storage';



//firebase.initializeApp(config);
//var db = firebase.firestore();



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCE4Zfleqw4fW2ow40iYxUC94kc5gQtM1c",
    authDomain: "tshirtdesignapp-bccb1.firebaseapp.com",
    projectId: "tshirtdesignapp-bccb1",
    storageBucket: "tshirtdesignapp-bccb1.appspot.com",
    messagingSenderId: "862571921411",
    appId: "1:862571921411:web:f6b203f9b188d9dea24e36",
    measurementId: "G-Y78G4BLCE9"
};
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
    storage, firebase as default
}