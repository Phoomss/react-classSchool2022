import React from 'react';
import '../nav_style.css';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
        <NavLink to="/" className="menu" >
            Home
        </NavLink> 
        - &nbsp;
        <NavLink to="/about" className="menu" >
            About
        </NavLink> 
        - &nbsp;
        <NavLink to="/product" className="menu" >
            Product
        </NavLink> 
    </nav>
  )
}

export default Navbar