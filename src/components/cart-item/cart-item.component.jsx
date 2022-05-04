import './cart-item.styles.scss'

export default function CartItem({ cartItem }) {
  const { name, imageUrl, qty, price } = cartItem
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={name} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span>
          ${price} x {qty} = ${price * qty}
        </span>
      </div>
    </div>
  )
}
