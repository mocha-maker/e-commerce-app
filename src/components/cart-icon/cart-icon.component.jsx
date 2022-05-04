import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

export default function CartIcon({ ...otherProps }) {
  return (
    <div className='cart-icon-container' {...otherProps}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}
