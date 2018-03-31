import firebase from 'firebase'
import firebaseConfigs from './fireBaseConfig'
import 'firebase/firestore'

const firebaseApp  = firebase.initializeApp(firebaseConfigs);
export default firebaseApp.firestore(); // this is the db/conn