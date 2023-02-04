import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'
import MainLayout from '../LAYOUTS/MainLayout';

const Product = () => {
  return (
   <MainLayout>
    <h1>Product</h1>
    <hr />
    <NavLink to="/product/1/999">Product 1</NavLink>
    - &nbsp;
    <NavLink to="/taxsal/1/999">Taxsal</NavLink>
   </MainLayout>
      
    
   
  )
}

export default Product