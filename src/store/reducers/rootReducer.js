import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import { combineReducers } from 'redux'
import projectReducer from './projectReducer'

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  project: projectReducer,
  firebase: firebaseReducer
})
export default rootReducer
