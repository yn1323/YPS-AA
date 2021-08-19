import * as admin from 'firebase-admin'
import { ENVIRONMENT, FIREBASE_NODE_CRUDENTIAL } from '@constant/env'

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(FIREBASE_NODE_CRUDENTIAL),
    databaseURL: process.env.NEXT_PUBLIC_F_DATABASE_URL,
  })
  if (ENVIRONMENT === 'development') {
    process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080'
  }
}
const db = admin.firestore()

export const nodeAdmin = admin
export const nodeFirestore = db
