import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from '../../utils/firebase/firebase.utils'
import { FcGoogle } from 'react-icons/fc'

export default function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocFromAuth(user)
  }
  return (
    <div>
      <h1>Sign In</h1>
      <div className='btn' onClick={logGoogleUser}>
        <FcGoogle style={{ paddingRight: '1rem' }} /> Sign in with Google
      </div>
    </div>
  )
}
