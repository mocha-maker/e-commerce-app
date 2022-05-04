import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './routes/pages/home/home.component'
import Shop from './routes/pages/shop/shop.component'
import Navigation from './routes/nav/navigation.component'
import Authentication from './routes/pages/auth/authentication.component'
import Settings from './routes/pages/settings/settings.component'
import Checkout from './routes/pages/checkout/checkout.component'
import Contact from './routes/pages/contact/contact.component'

function App() {
  return (
    <>
      {/* Routing */}
      <Routes>
        <Route path='/' element={<Navigation />}>
          {/* children */}
          <Route index element={<Home />}></Route>
          <Route path='/sign-in' element={<Authentication />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/profile' element={<Settings />}></Route>
          <Route path='/cart' element={<Checkout />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Route>
      </Routes>
      {/* Other Components */}
    </>
  )
}

export default App