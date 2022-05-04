import './checkout-item.styles.scss'

import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiOutlineCloseCircle,
} from 'react-icons/ai'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

export default function CheckoutItem({ item }) {
  const { updateCartItem, removeCartItem } = useContext(CartContext)
  const { imageUrl, name, qty, price } = item

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <div className='name'>{name}</div>
      <div className='quantity'>
        <AiOutlineMinusCircle
          className='arrow'
          onClick={() => updateCartItem(item, 'decrease')}
        />
        <span className='value'>{qty}</span>
        <AiOutlinePlusCircle
          className='arrow'
          onClick={() => updateCartItem(item, 'increase')}
        />
      </div>
      <div className='price'>${price}</div>
      <div className='remove-button' onClick={() => removeCartItem(item)}>
        <AiOutlineCloseCircle />
      </div>
    </div>
  )
}
