import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCbrtB1qJy6VLhDBKEOjzz6XdjnH8uf6uU",
  authDomain: "expensify-radek-feb1d.firebaseapp.com",
  databaseURL: "https://expensify-radek-feb1d.firebaseio.com",
  projectId: "expensify-radek-feb1d",
  storageBucket: "expensify-radek-feb1d.appspot.com",
  messagingSenderId: "253595792025",
  appId: "1:253595792025:web:ebd3c951c4cf599047fe08"
};

firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
  name: 'Radek Jedrej'
})