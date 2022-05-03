import './categories.styles.scss'

function CategoryItem({ item }) {
  const { title, imageUrl } = item
  return (
    <div className='category-container'>
      <img src={imageUrl} alt={title} className='background-image' />
      <div className='category-body-container'>
        <h2>{title.toLocaleUpperCase()}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}
export default CategoryItem
