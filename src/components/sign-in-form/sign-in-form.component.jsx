import { useState } from 'react'
import {
  signInWithEmail,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
import { FcGoogle } from 'react-icons/fc'

function SignInForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const onChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const resetFields = () => {
    setFormData({
      email: '',
      password: '',
    })
  }
  const onSubmit = async (e) => {
    e.preventDefault()
    console.log('Sign in with Email/Password')

    try {
      console.log('Attempting sign in')
      await signInWithEmail(email, password)
    } catch (error) {
      console.log('Bad Credentials')
      resetFields()
    }
  }

  const logGoogleUser = async (e) => {
    e.preventDefault()
    console.log('Sign-in with Google Popup')
    await signInWithGooglePopup()
  }

  return (
    <div className='form'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={onSubmit}>
        <FormInput
          label='Email'
          id='email'
          name='email'
          type='email'
          value={email}
          onChange={onChange}
          required
        />
        <FormInput
          label='Password'
          id='password'
          name='password'
          type='password'
          value={password}
          onChange={onChange}
          required
        />
        <div className='forms-container'>
          <Button type='Submit'>Sign In</Button>
          <Button buttonType='google' onClick={logGoogleUser}>
            <FcGoogle style={{ paddingRight: '1rem' }} /> Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  )
}
export default SignInForm
