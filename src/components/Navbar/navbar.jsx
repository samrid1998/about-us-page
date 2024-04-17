import React, { useState } from 'react'
import './navbar.css'
import metalogo from '../../assets/metalogo.png'
import menu_icon from '../../assets/menu_icon.png'

const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () =>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }
  return (
    <nav>
        <div class="navbar-brand">
            <img src={metalogo} alt="MetaLogic Company Logo" className='metalogo' />
            <h1>MetaLogic</h1>
        </div>
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><a className="navbar-link">Home</a></li>
            <li><a className="navbar-link">Services</a></li>
            <li><a className="navbar-link">Career</a></li>
            <li><a className="navbar-link">Blogs</a></li>
            <li><a className="navbar-link">About Us</a></li>
            
        </ul>
        <button className="btn btn-danger">Get in Touch</button>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar;