import { useState } from 'react'
import {
  createAuthUserFromEmail,
  createUserDocFromAuth,
} from '../../utils/firebase/firebase.utils'
import { useNavigate } from 'react-router-dom'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

function SignUpForm() {
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    password: '',
    password2: '',
  })

  const { displayName, email, password, password2 } = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const resetPasswordFields = () => {
    setFormData({
      password: '',
      password2: '',
    })
  }
  const onSubmit = async (e) => {
    e.preventDefault()

    // check if passwords match
    if (password === password2) {
      try {
        // create a new user
        const response = await createAuthUserFromEmail(email, password)
        const { user } = await response

        // Create user doc
        await createUserDocFromAuth(user, { displayName })
        // Navigate to Home
        navigate('/')
      } catch (error) {
        console.log(error)
      }
    } else {
      console.log('Passwords do not match')
      resetPasswordFields()
    }
  }

  return (
    <div className='form'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={onSubmit}>
        <FormInput
          label='Display Name'
          id='displayName'
          name='displayName'
          type='text'
          value={displayName}
          onChange={onChange}
          required
        />
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
        <FormInput
          label='Confirm Password'
          id='password2'
          name='password2'
          type='password'
          value={password2}
          onChange={onChange}
          required
        />
        <Button type='Submit'>Sign Up</Button>
      </form>
    </div>
  )
}
export default SignUpForm
