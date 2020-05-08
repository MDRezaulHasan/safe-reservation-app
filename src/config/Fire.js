import * as firebase from "firebase";
var firebaseConfig = {
  apiKey: "",
  authDomain: "safe-reservation-app.firebaseapp.com",
  databaseURL: "https://safe-reservation-app.firebaseio.com",
  projectId: "safe-reservation-app",
  storageBucket: "safe-reservation-app.appspot.com",
  messagingSenderId: "618968754259",
  appId: "1:618968754259:web:b11d80e794fa0ba36a3ea6",
  measurementId: "G-MNE9369W6J",
};
const Fire = firebase.initializeApp(firebaseConfig);

export default Fire;
