import firebaseApp from './firebaseApp';
import 'firebase/firestore'

const storage = firebaseApp.firestore(); // this is the db/conn

export default storage;