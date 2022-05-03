import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './routes/pages/home.component'
import Shop from './routes/pages/shop.component'
import Navigation from './routes/nav/navigation.component'
import SignIn from './routes/pages/sign-in.component'

function App() {
  return (
    <>
      {/* Routing */}
      <Routes>
        <Route path='/' element={<Navigation />}>
          {/* children */}
          <Route index element={<Home />}></Route>
          <Route path='/sign-in' element={<SignIn />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
        </Route>
      </Routes>
      {/* Other Components */}
    </>
  )
}

export default App