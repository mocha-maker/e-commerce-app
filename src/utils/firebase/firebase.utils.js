import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, getDocs, query, setDoc, collection, writeBatch } from 'firebase/firestore'

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
initializeApp(firebaseConfig)
export const db = getFirestore()

// Collection Management

export const addCollectionAndDocs = async (collectionKey, objsToAdd, field) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  objsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object[field].toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()
  console.log('Docs added');
}

export const getCategoriesAndDocs = async () => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)

  const qSnapshot = await getDocs(q)
  // Build products using categories
  const categoryMap = qSnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data()
    acc[title.toLowerCase()] = items
    return acc
  }, {})
  console.log('Categories and Docs Retrieved');
  return categoryMap
}

// Authentications
export const auth = getAuth()

// Set up Google provider
const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: 'select_account',
})

// Google Authentication
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider)

// Email Authentication
export const createAuthUserFromEmail = async (email, password) => {
  if (!email || !password) return
  return await createUserWithEmailAndPassword(auth, email, password)
}
export const signInWithEmail = async (email, password) => {
  if (!email || !password) return
  return await signInWithEmailAndPassword(auth, email, password)
}


// Create user document in collections
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

// Sign out User
export const signOutUser = async () => signOut(auth)

// Listen to Auth State Observer
export const onAuthStateChangedListener = (callback) => {
  callback && onAuthStateChanged(auth, callback)
}
