import { createContext, useState } from 'react'

// Handle addCart logic
const addToCartHandler = (productToAdd, cartItems) => {
  // check if product to add already exists in cart
  const foundIndex = cartItems.findIndex((item) => item.id === productToAdd.id)

  if (foundIndex !== -1) {
    // if exists, increment qty of existing cartItem
    cartItems[foundIndex].qty += 1
    return [...cartItems]
  }
  // add product to cart and return array
  return [...cartItems, { ...productToAdd, qty: 1 }]
}

// the actual value you want to access
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  setCartItems: () => [],
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const addItemToCart = (product) => {
    setCartItems(addToCartHandler(product, cartItems))
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartProvider
