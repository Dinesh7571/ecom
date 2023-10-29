import React from 'react'
import { Route,Routes } from 'react-router-dom'

import HomePage from '../Home/HomePage'
import ProductsPage from '../Products/ProductsPage'
import SingleProduct from '../SingleProduct/SingleProduct'
import CartPage from '../Cart/CartPage'
import MyOrderPage from '../MyOrder/MyOrderPage'
import LoginPage from '../Authentication/LoginPage'
import SignupPage from '../Authentication/SignupPage'

const Routing = () => {
  return (
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/products' element={<ProductsPage/>}/>
    <Route path='/product/1' element={<SingleProduct/>}/>
    <Route path='/signup' element={<SignupPage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/cart' element={<CartPage/>}/>
    <Route path='/myorders' element={<MyOrderPage/>}/>
   </Routes>
  )
}

export default Routing