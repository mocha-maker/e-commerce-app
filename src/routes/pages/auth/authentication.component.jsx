import SignUpForm from '../../../components/sign-up-form/sign-up-form.component'
import SignInForm from '../../../components/sign-in-form/sign-in-form.component'

export default function SignIn() {
  return (
    <div className='forms-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}
