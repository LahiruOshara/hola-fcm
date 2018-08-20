importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

var config = {
  apiKey: "AIzaSyBQAWBhVVyshp0NeIPFh3_1Ee3kUfbzuiY",
    authDomain: "hola-cfd6b.firebaseapp.com",
    databaseURL: "https://hola-cfd6b.firebaseio.com",
    projectId: "hola-cfd6b",
    storageBucket: "hola-cfd6b.appspot.com",
    messagingSenderId: "414985638685"
};
firebase.initializeApp(config);

firebase.messaging();