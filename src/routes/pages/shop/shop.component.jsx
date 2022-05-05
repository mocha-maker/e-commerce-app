import { useContext } from 'react'
import './shop.styles.scss'
import ProductCard from '../../../components/product-card/product-card.component'
import { StoreContext } from '../../../context/store.context'

function Shop() {
  const { categoriesMap } = useContext(StoreContext)
  return (
    <>
      {Object.keys(categoriesMap).map((title) => (
        <>
          <h2 className='title'>{title}</h2>
          <div className='products-container'>
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      ))}
    </>
  )
}
export default Shop
