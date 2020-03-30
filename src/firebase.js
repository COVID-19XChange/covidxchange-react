import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCnMFhHp1hudeHLyu6TPDmw9CYWhkRAzu4",
    authDomain: "covidxchange-626ee.firebaseapp.com",
    databaseURL: "https://covidxchange-626ee.firebaseio.com",
    projectId: "covidxchange-626ee",
    storageBucket: "covidxchange-626ee.appspot.com",
    messagingSenderId: "583201812505",
    appId: "1:583201812505:web:db79062dfc8aede3be7a88",
    measurementId: "G-EHP5P4YSFZ"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default app;
