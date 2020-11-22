import * as firebase from 'firebase'




var firebaseConfig = {
    apiKey: "AIzaSyCXvqa73OxRZSgg2i62_Vizwr9NMuNGNxU",
    authDomain: "foodapp-a8346.firebaseapp.com",
    databaseURL: "https://foodapp-a8346.firebaseio.com",
    projectId: "foodapp-a8346",
    storageBucket: "foodapp-a8346.appspot.com",
    messagingSenderId: "776011982776",
    appId: "1:776011982776:web:87b6c85ea0ddd072f9914d",
    measurementId: "G-6ETVEV08MR"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase
