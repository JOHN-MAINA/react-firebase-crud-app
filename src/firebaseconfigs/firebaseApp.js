import firebase from 'firebase'
import firebaseConfigs from './fireBaseConfig'

const firebaseApp  = firebase.initializeApp(firebaseConfigs);

export default firebaseApp;