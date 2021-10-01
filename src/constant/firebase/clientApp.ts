import { initializeApp } from 'firebase/app'
import 'firebase/auth'
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore'
import 'firebase/storage'
import { ENVIRONMENT, FIREBASE_CLIENT_CRUDENTIAL } from '@constant/env'

const app = initializeApp(FIREBASE_CLIENT_CRUDENTIAL)
const db = getFirestore(app)
if (ENVIRONMENT === 'development') {
  connectFirestoreEmulator(db, 'localhost', 8080)
}

export const clientAdmin = app
export const clientFirestore = db
