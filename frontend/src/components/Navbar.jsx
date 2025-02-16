import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for open/close
import { useAuth } from '../store/Auth';
import './nav.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const {isLoggedIn}=useAuth();

  return (
    <>
      <div className="container-fluid nav pb-4 pt-md-4">
        <div>
          <Link to="/"><img src="/images/logo.png" alt="logo image" className='img-fluid rounded ' style={{width:"114px"}} /></Link>
        </div>
        
        {/* Navigation Links - Show/Hide based on isOpen state */}
        <div className={`menu ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink></li>
            <li><NavLink to="/services" onClick={() => setIsOpen(false)}>Services</NavLink></li>
     
            {
              isLoggedIn?(
                <li><NavLink to="/logout" onClick={() => setIsOpen(false)}>Logout</NavLink></li>
              ):(
                <>
                <li><NavLink to="/login" onClick={() => setIsOpen(false)}>Login</NavLink></li>
                <li><NavLink to="/signup" onClick={() => setIsOpen(false)}>SignUp</NavLink></li>
                </>
              )
            }
          
          </ul>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </>
  );
}
