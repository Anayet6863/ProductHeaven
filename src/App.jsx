import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './Components/ProductLists/ProductList'



function App() {
  return (
    <>
      <div className='container mx-auto text-center'>
      <ProductList></ProductList>
      </div>
    </>
  )
}

export default App
