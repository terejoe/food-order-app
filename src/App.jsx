import React, {useState} from 'react'
import Cart from './components/Cart/Cart'

import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const showCartHandler = () => {
    setCartIsOpen(true)
  }

  const hideCartHandler = () => {
    setCartIsOpen(false)
  }
 
  return (
    <>
      {cartIsOpen && <Cart onCloseCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </>
  )
}

export default App
