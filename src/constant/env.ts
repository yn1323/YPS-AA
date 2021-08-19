import { ServiceAccount } from 'firebase-admin'

export const FIREBASE_NODE_CRUDENTIAL: ServiceAccount = {
  // type: 'service_account',
  projectId: process.env.NEXT_PUBLIC_F_PROJECT_ID,
  // private_key_id: process.env.NEXT_PUBLIC_F_PRIVATE_KEY_ID || '',
  privateKey: process.env.NEXT_PUBLIC_F_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  clientEmail: process.env.NEXT_PUBLIC_F_CLIENT_ID,
  // client_id: process.env.NEXT_PUBLIC_F_CLIENT_ID || '',
  // auth_uri: process.env.NEXT_PUBLIC_F_AUTH_URI || '',
  // token_uri: process.env.NEXT_PUBLIC_F_TOKEN_URI || '',
  // auth_provider_x509_cert_url:
  // process.env.NEXT_PUBLIC_F_AUTH_PROVIDER_X509_CERT_URL || '',
  // client_x509_cert_url: process.env.NEXT_PUBLIC_F_CLIENT_X509_CERT_URL || '',
}

export const FIREBASE_CLIENT_CRUDENTIAL = {
  apiKey: process.env.NEXT_PUBLIC_F_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_F_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_F_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_F_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_F_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_F_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_F_APP_ID,
}

export const ENVIRONMENT = process.env.VERCEL_ENV
