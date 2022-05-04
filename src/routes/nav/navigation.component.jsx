import { useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { UserContext } from '../../context/user.context'
import { CartContext } from '../../context/cart.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'

// Components
import './navigation.styles.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { BsPersonCircle } from 'react-icons/bs'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component'

function Navigation() {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen, setIsCartOpen } = useContext(CartContext)

  const toggleCart = (e) => {
    setIsCartOpen(!isCartOpen)
    console.log(isCartOpen)
  }

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
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          )}
          <Link className='nav-link' to='/profile'>
            <BsPersonCircle />
          </Link>
          <CartIcon onClick={toggleCart} />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </>
  )
}
export default Navigation
