import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
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
const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account',
})

// Exports
export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocFromAuth = async (userAuth) => {
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
      })
    } catch (error) {
      console.log('Error:' + error)
    }
  }
}
