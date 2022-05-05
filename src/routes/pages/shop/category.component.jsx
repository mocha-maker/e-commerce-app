import { useContext } from 'react'
import './shop.styles.scss'
import ProductCard from '../../../components/product-card/product-card.component'
import { StoreContext } from '../../../context/store.context'
import { useParams } from 'react-router-dom'

function Category() {
  const { categoriesMap } = useContext(StoreContext)
  const params = useParams()
  const { category } = params

  return (
    <>
      <h2 className='title'>{category.toLocaleUpperCase()}</h2>
      <div className='products-container'>
        {categoriesMap[category].map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}
export default Category
