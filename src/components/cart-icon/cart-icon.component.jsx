import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

export default function CartIcon({ ...otherProps }) {
  const { cartCount } = useContext(CartContext)
  return (
    <div className='cart-icon-container' {...otherProps}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  )
}
