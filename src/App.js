import Directory from './components/directory/directory.component'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './routes/Home'
import Shop from './routes/Shop'
import Navigation from './routes/nav/navigation.component'

function App() {
  return (
    <>
      {/* Routing */}
      <Routes>
        <Route path='/' element={<Navigation />}>
          {/* children */}
          <Route index element={<Home />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
        </Route>
      </Routes>
      {/* Other Components */}
    </>
  )
}

export default App
