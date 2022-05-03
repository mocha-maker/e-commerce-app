import CategoryItem from '../categories/category-item.component'

function Directory({ categories }) {
  return (
    <div className='categories-container'>
      {categories.map((category) => {
        return <CategoryItem key={category.id} item={category} />
      })}
    </div>
  )
}
export default Directory
