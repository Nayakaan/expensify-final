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

const database = firebase.database();


database.ref('expenses').push({
  description: 'Course Topic!',
  note: 'React, Python',
  amount: 2450,
  createdAt: 123987
});

// database.ref('expenses').push({
//   description: 'Game Topic!',
//   note: 'React, Python',
//   amount: 350,
//   createdAt: 13987
// });

// database.ref('expenses').push({
//   description: 'React Topic!',
//   note: 'React, Python',
//   amount: 22450,
//   createdAt: 1244987
// });


// const notes = [{
//   id: '12',
//   title: 'First note!',
//   body: 'This is my note'
// }, {
//   id: '342',
//   title: 'Second note!',
//   body: 'This is my note'
// }]

// database.ref('notes').set(notes);

// database.ref()
//   .once()
//   .then(data => {
//     console.log(data)
//   })
//   .catch(err => {
//     console.log('SOmething went wrong', err)
//   })

// database.ref()
//   .on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is ${val.job.title} at ${val.job.company}`)
//   })

//   setTimeout(() => {
//     database.ref().update({
//       name: 'Radek Jedrzej',
//       'job/title': 'Sprzatacz'
//     })
//     .then(() => {
//       console.log('all good')
//     })
//     .catch(err => {
//       console.log(err)
//     })
//   }, 3000)


// database.ref().set({
//   name: 'Radek Jedrej',
//   age: 32,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   isSingle: true,
//   location: {
//     city: 'Kwidzyn',
//     country: "Poland"
//   }
// }).then(() => {
//   console.log('Data added')
// }).catch(err => {
//   console.log('Something went wrong')
// })

// database.ref().update({
//   name: 'Edyta Zelma',
//   age: 27,
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   isSingle: null,
//   'location/city': 'Rynek'
// }).then(() => {
//   console.log('Database updated')
// }).catch(err => {
//   console.log('Something went wrong')
// })

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Data Was Removed')
//   })
//   .catch(err => {
//     console.log(err)
//   })