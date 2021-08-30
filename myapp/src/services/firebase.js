import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyC-puxz7xyyQ255W25HAAMb6RnSrAaUpF8",
  authDomain: "reactchat-17b10.firebaseapp.com",
  databaseURL: "https://reactchat-17b10-default-rtdb.firebaseio.com",
  projectId: "reactchat-17b10",
  storageBucket: "reactchat-17b10.appspot.com",
  messagingSenderId: "312214166851",
  appId: "1:312214166851:web:03775778184f17d0ff23f6"
};

firebase.initializeApp(firebaseConfig);


export const db = firebase.database();
export const auth = firebase.auth();