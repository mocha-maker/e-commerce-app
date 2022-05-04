import { useContext } from 'react'
import './shop.styles.scss'
import ProductCard from '../../../components/product-card/product-card.component'
import { StoreContext } from '../../../context/store.context'

function Shop() {
  const { products } = useContext(StoreContext)
  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
export default Shop
