import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss'
import { useNavigate } from 'react-router-dom'

export default function CartDropDown() {
  const { cartItems, cartCount, cartTotal } = useContext(CartContext)

  const navigate = useNavigate()

  return (
    <div className='cart-dropdown-container'>
      {cartCount > 0 ? (
        <>
          <div className='cart-items'>
            {cartItems.map((item) => (
              <CartItem key={item.id} cartItem={item} />
            ))}
          </div>

          <div className='cart-total'>CART TOTAL: ${cartTotal}</div>
          <Button onClick={() => navigate('/cart')}>Checkout</Button>
        </>
      ) : (
        <p>You have no items in your cart.</p>
      )}
    </div>
  )
}
