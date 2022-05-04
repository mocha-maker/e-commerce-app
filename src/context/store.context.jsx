import { createContext, useState, useEffect } from 'react'
import SHOP_DATA from '../data/shop-data.json'

// the actual value you want to access
export const StoreContext = createContext({
  products: [],
  setProducts: () => [],
  currentProduct: null,
  setCurrentProduct: () => null,
})

export const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [currentProduct, setCurrectProduct] = useState(null)
  const value = { products, setProducts, currentProduct, setCurrectProduct }

  // load shop data
  useEffect(() => {
    setProducts(SHOP_DATA)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export default StoreProvider
