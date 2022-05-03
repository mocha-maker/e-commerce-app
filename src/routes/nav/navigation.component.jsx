import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import './navigation.styles.scss'

function Navigation() {
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
          <Link className='nav-link' to='/sign-in'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}
export default Navigation
