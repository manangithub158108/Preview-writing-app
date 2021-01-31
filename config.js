import firebase from 'firebase'

require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyCQuErs3iu3eNCt5nug0vKloak-o0NbdWU",
    authDomain: "bedtime-stories-8ac45.firebaseapp.com",
    projectId: "bedtime-stories-8ac45",
    storageBucket: "bedtime-stories-8ac45.appspot.com",
    messagingSenderId: "302476353917",
    appId: "1:302476353917:web:bb78f8ac5bde977d09ac14"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()