import './categories.styles.scss'
import { Link } from 'react-router-dom'

function CategoryItem({ item }) {
  const { title, imageUrl } = item
  return (
    <Link to={`/shop/${title}`} className='category-container'>
      <img src={imageUrl} alt={title} className='background-image' />
      <div className='category-body-container'>
        <h2>{title.toLocaleUpperCase()}</h2>
        <p>Shop Now</p>
      </div>
    </Link>
  )
}
export default CategoryItem
