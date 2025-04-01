import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from './image/logo.png'

function Header() {
  return (
    <div className="header">
     
    
    <NavLink to={''}> <img className="logo" src={logo} alt="" /></NavLink>
      
      <nav>
        {/* <a href="/">Home</a> */}
    <NavLink to={'/'}>Home</NavLink>
    <NavLink to={'about'}>About</NavLink>
    <NavLink to={'service'}>Service</NavLink>
    <NavLink to={'contact'}>Contact</NavLink>
    <NavLink to={'github'}>GitHub</NavLink>
       
      </nav>
      <div className="searchBar">
        <input type="text" placeholder="Search" />
        <button id="searchBtn">&#128269;</button>
      </div>
    </div>
  );
}

export default Header;
