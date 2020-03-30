import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';
import * as serviceWorker from './serviceWorker';

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
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
