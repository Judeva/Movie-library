import firebase from 'firebase/app';
import 'firebase/firebase-auth';

var firebaseConfig = {
    apiKey: "AIzaSyDckTciFRpLtWgNEtwvmiuuEouixyE-bCU",
    authDomain: "movies-library-83ca9.firebaseapp.com",
    projectId: "movies-library-83ca9",
    storageBucket: "movies-library-83ca9.appspot.com",
    messagingSenderId: "639871663291",
    appId: "1:639871663291:web:f4b37eb750358ad5af3d9e"
};

firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();

export {
    auth, firebase as default
}



