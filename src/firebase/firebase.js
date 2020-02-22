import * as firebase from 'firebase';


  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_SORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };

  // Initialize Firebase

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

















//listening for changed on events..
// database.ref('expenses').on('child_removed', (snapshot) =>{
//   console.log(snapshot.key, snapshot.val())
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
// console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });


// database.ref('expenses')
// .once('value')
// .then((snapshot)=> {


// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id:childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });



// database.ref('notes/-M0VN8sXerhOGhSAS08f').update({
//   body: 'buy food'
// });

// database.ref('expenses').push({
//     description:'course ',
//     amount: 1,
//     createdAt: 56189643
// });

// database.ref("expenses").push({
//   description: "Gym",
//   amount: 200,
//   createdAt: 564161651
// });
// database.ref("expenses").push({
//   description: "PC",
//   amount: 5646,
//   createdAt: 65496546
// });


// database.ref('notes').push({
//     title:'course topics',
//     body: 'ract, pythonn'
// });

// const firebaseNotes = {
//   notes: {
//     adaada: {
//       title: "First note",
//       body: "This is the body of note 1"
//     },
//     bcvbcvbxc: {
//       title: "second note",
//       body: "This is the body of note2"
//     }
//   }
// };

// const notes = [
//   {
//     id: "12",
//     title: "First note",
//     body: "This is the body of note 1"
//   },
//   {
//     id: "13",
//     title: "First note",
//     body: "This is the body of note 2"
//   }
  
// ];

// database.ref('notes').set(notes);


// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at  ${val.job.company}`)
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// })


// setTimeout(() => {
//   database.ref('age').set(24);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref("age").set(31);
// }, 10500);


// database.ref('location')
// .once('value')
// .then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// }).catch((e) => {
//   console.log('there was an issue', e);
// })


// database.ref().set({
//     name: "Jack Mcsweeney",
//     age: 24,
//     stressLevel: 10,
//     job: {
//       title: 'software dev',
//       company: 'google'
//     },
//     location: {
//       city: "Brisbane",
//       country: "Australia"
//     }
// }).then(() => {
//     console.log('data added');
// }).catch((e) => {
//     console.log('this failed: ', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company' : 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref('isSingle').set(null);

// database.ref('isSingle')
// .remove().then(() => {
//   console.log('data was removed');
// })
// .catch((e)=> {
//   console.log('didnt remove data', e);
// });

