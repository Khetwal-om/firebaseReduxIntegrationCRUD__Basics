import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import rootReducer from './store/reducers/rootReducer'

import { createStore, applyMiddleware, compose } from 'redux'

import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'

import firebase from './firebase'
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(firebase), // redux binding for firebase
    reduxFirestore(firebase) // redux bindings for firestore
  )
)

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
