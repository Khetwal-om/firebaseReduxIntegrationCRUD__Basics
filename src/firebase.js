import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: 'AIzaSyA1UyDKy0ar_tetJhgjmUx6haXehMbjufw',
  authDomain: 'mariorevision-f33ad.firebaseapp.com',
  databaseURL: 'https://mariorevision-f33ad.firebaseio.com',
  projectId: 'mariorevision-f33ad',
  storageBucket: 'mariorevision-f33ad.appspot.com',
  messagingSenderId: '616142445113',
  appId: '1:616142445113:web:6bc3675637a43fabebcbe8'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase
