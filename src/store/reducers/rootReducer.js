import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  firebase: firebaseReducer
})
export default rootReducer
