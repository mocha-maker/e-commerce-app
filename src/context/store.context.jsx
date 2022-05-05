import { createContext, useState, useEffect } from 'react'
import SHOP_DATA from '../data/shop-data.js'
import {
  addCollectionAndDocs,
  getCategoriesAndDocs,
} from '../utils/firebase/firebase.utils.js'

// the actual value you want to access
export const StoreContext = createContext({
  categoriesMap: {},
  setCategoriesMap: () => {},
  currentProduct: null,
  setCurrentProduct: () => null,
})

export const StoreProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({})
  const [currentProduct, setCurrectProduct] = useState(null)

  useEffect(() => {
    // Create Categories and Products
    //addCollectionAndDocs('categories', SHOP_DATA, title)
  }, [])

  // load shop data
  useEffect(() => {
    const getProducts = async () => {
      const categoryMap = await getCategoriesAndDocs()
      setCategoriesMap(categoryMap)
    }

    getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const value = {
    categoriesMap,
    currentProduct,
    setCurrectProduct,
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export default StoreProvider
