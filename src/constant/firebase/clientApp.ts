import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// import 'firebase/analytics'
// import 'firebase/performance'
import { ENVIRONMENT, FIREBASE_CLIENT_CRUDENTIAL } from '@constant/env'

if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CLIENT_CRUDENTIAL)
  // Check that `window` is in scope for the analytics module!
  if (typeof window !== 'undefined') {
    // Enable analytics. https://firebase.google.com/docs/analytics/get-started
    if ('measurementId' in FIREBASE_CLIENT_CRUDENTIAL) {
      // firebase.analytics()
      // firebase.performance()
    }
  }
  if (ENVIRONMENT === 'development') {
    firebase.firestore().useEmulator('localhost', 8080)
  }
}

export const clientAdmin = firebase
export const clientFirestore = firebase.firestore()
