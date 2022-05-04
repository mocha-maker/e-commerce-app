import Button from '../button/button.component'
import './cart-dropdown.styles.scss'

export default function CartDropDown() {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'></div>
      <Button>Check out</Button>
    </div>
  )
}
