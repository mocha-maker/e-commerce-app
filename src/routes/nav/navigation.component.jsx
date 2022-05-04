import { useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { UserContext } from '../../context/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'

// Components
import './navigation.styles.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { BsPersonCircle } from 'react-icons/bs'

function Navigation() {
  const { currentUser } = useContext(UserContext)

  return (
    <>
      <div className='navigation'>
        <div className='logo-container'>
          <Link className='logo' to='/'>
            <Logo />
          </Link>
        </div>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link' to='/contact'>
            CONTACT
          </Link>

          {!currentUser ? (
            <Link className='nav-link' to='/sign-in'>
              SIGN IN
            </Link>
          ) : (
            <span onClick={signOutUser}>SIGN OUT</span>
          )}
          <BsPersonCircle />
        </div>
      </div>
      <Outlet />
    </>
  )
}
export default Navigation
