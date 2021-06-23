import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: process.env.RECT_APP_API_KEY,
  authDomain: process.env.RECT_APP_AUTH_DOMAIN,
  databaseURL: process.env.RECT_APP_DATABASE_URL,
  projectId: process.env.RECT_APP_PROJECT_ID,
  storageBucket: process.env.RECT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.RECT_APP_MESSAGING_SENDER_ID,
  appId: process.env.RECT_APP_APP_ID
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const database = firebase.database()