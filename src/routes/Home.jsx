import { Outlet } from 'react-router-dom'

import Directory from '../components/directory/directory.component'
import categories from './categories'

function Home() {
  return (
    <>
      <Directory categories={categories} />
      {/* Render children components */}
      <Outlet />
    </>
  )
}
export default Home
