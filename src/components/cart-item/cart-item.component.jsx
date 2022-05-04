import './cart-item.styles.scss'

export default function CartItem({ cartItem }) {
  const { name, qty, price } = cartItem
  return (
    <div>
      <h2>
        {name} - ${price} x {qty} = ${price * qty}
      </h2>
    </div>
  )
}
