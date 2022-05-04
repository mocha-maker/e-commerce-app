import { useContext } from 'react'
import CheckoutItem from '../../../components/checkout-item/checkout-item.component'
import { CartContext } from '../../../context/cart.context'
import './checkout.styles.scss'

function Orders() {
  const { cartItems, cartCount, cartTotal } = useContext(CartContext)
  return (
    <div className='checkout-container'>
      <h1>Checkout</h1>
      <div className='checkout-header'>
        <div>Product</div>
        <div>Description</div>
        <div>Quantity</div>
        <div>Price</div>
        <div>Remove</div>
      </div>
      {cartCount !== 0 ? (
        cartItems.map((item) => <CheckoutItem key={item.id} item={item} />)
      ) : (
        <div className='checkout-container'>
          You have no items in your cart.
        </div>
      )}
      <div className='total'>TOTAL: $ {cartTotal}</div>
    </div>
  )
}
export default Orders
