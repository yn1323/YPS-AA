import * as admin from 'firebase-admin'
import { ENVIRONMENT, FIREBASE_NODE_CRUDENTIAL } from '@constant/env'

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(FIREBASE_NODE_CRUDENTIAL),
    // databaseURL: process.env.NEXT_PUBLIC_F_DATABASE_URL,
  })
}
const db = admin.firestore()
if (ENVIRONMENT === 'development') {
  process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080'
}

export const nodeAdmin = admin
export const nodeFirestore = db
