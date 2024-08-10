import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Screens/Dashboard'
import Login from './Screens/Login'
import Signup from './Screens/Signup'
import ProductInfo from './Components/ProductInfo'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="productInfo/:id" element={<ProductInfo/>}/>


    </Routes>
   )
}

export default App
