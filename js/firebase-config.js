// js/firebase-config.js

const firebaseConfig = {
  apiKey: "AIzaSyCsWjyFGCWbeq23SG_xSXDsmkOdRL69nUY",
  authDomain: "blopinion-a62b5.firebaseapp.com",
  projectId: "blopinion-a62b5",
  storageBucket: "blopinion-a62b5.appspot.com",
  messagingSenderId: "807528898085",
  appId: "1:807528898085:web:915a3ed2b537bf905fa9cc"
};

// FORCE MANUAL INIT — BLOCK AUTO INIT
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

window.firebaseAuth = firebase.auth();
