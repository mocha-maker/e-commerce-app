import { createContext, useEffect, useState } from 'react'

// Handle addToCart and quantity update logic
const cartQtyHandler = (productToUpdate, cartItems, amt) => {
  // check if product to add already exists in cart
  const foundIndex = cartItems.findIndex((item) => item.id === productToUpdate.id)

  if (foundIndex !== -1) {
    // if exists, increment qty of existing cartItem
    cartItems[foundIndex].qty += amt
    // check if item reduced to 0
    if(cartItems[foundIndex].qty === 0) return removeItemHandler(productToUpdate, cartItems)
    return [...cartItems]
  }
  // add product to cart and return array
  return [...cartItems, { ...productToUpdate, qty: 1 }]
}

const removeItemHandler = (cartItem, cartItems) => {
  return cartItems.filter((item) => item.id !== cartItem.id)
}

// the actual value you want to access
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  setCartItems: () => [],
})

// Main Cart Context Provider
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (curTotal, curItem) => curTotal + curItem.qty,
      0
    )
    setCartCount(newCartCount)

    const newCartTotal = cartItems.reduce(
      (priceTotal, curItem) => priceTotal + curItem.price * curItem.qty,
      0
    )
    setCartTotal(newCartTotal)
  }, [cartItems])

  const addItemToCart = (product) => {
    setCartItems(cartQtyHandler(product, cartItems, 1))
  }

  const updateCartItem = (cartItem, action) => {
    console.log('Updating checkout item qty')
    let amt
    action === 'increase' ? (amt = 1) : (amt = -1)
    setCartItems(cartQtyHandler(cartItem, cartItems, amt))
  }

  const removeCartItem = (cartItem) => {
    setCartItems(removeItemHandler(cartItem, cartItems))
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    cartTotal,
    updateCartItem,
    removeCartItem,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartProvider
