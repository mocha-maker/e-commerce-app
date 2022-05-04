import { logRoles } from '@testing-library/react'
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  EmailAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDuzoQrNOCbzxI7_CYiugEiDxHKkchEspw',
  authDomain: 'rugged-people-db-34365.firebaseapp.com',
  projectId: 'rugged-people-db-34365',
  storageBucket: 'rugged-people-db-34365.appspot.com',
  messagingSenderId: '290977277228',
  appId: '1:290977277228:web:72cb4e03cf5aa0fb933889',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

// Set up Google provider
const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: 'select_account',
})

// Exports
export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider)

// Set up Email Provider
const emailProvider = new EmailAuthProvider()
export const createAuthUserFromEmail = async (email, password) => {
  if (!email || !password) return
  return await createUserWithEmailAndPassword(auth, email, password)
}
export const signInWithEmail = async (email, password) => {
  if (!email || !password) return
  return await signInWithEmailAndPassword(auth, email, password)
}

export const db = getFirestore()

export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
  // Check if document exists
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  // if user data does not exist, create a new document in users collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      })
      console.log('New User Doc Created')
    } catch (error) {
      console.log('Error:' + error)
    }
  }
}
