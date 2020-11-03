import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import { combineReducers } from 'redux'
import projectReducer from './projectReducer'
import singletutorialReducer from './singletutorialReducer'

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  singletutorial: singletutorialReducer,
  project: projectReducer,
  firebase: firebaseReducer
})
export default rootReducer
