import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SideNavBar.css";
const SlideInNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen); // Toggle the state
  const closeSidebar = () => setIsOpen(false);

  return (

    <div  className="side-nav-container">
      {/* Menu Button */}
      <button
        className="menu-btn"
        onClick={toggleNav}
        aria-label="Toggle Navigation"
      >
        ☰ Menu
      </button>
      {/* Side Navigation */}
      <nav className={`side-nav ${isOpen ? "active" : ""}`}>
        <div className='name-card'>
            <img className='headshot'src='../../Images/head.jpg'></img>
            <h1>David Villarreal</h1>
            <h2>Web Developer</h2>
            <div className='contacts-container'>
                <div className='contacts'>
                    <a href="mailto:davidvillarr3al@gmail.com">
                            <i class="fa-solid fa-envelope"></i>
                    </a>  
                </div>
                <div className='contacts'>
                <a href="https://github.com/davidVillarreal03">
                <i class="fa-brands fa-github"></i>
                </a> 

                </div>
                <div className='contacts'>
                    <a href="https://stackoverflow.com/users/27916696/david-villarreal">
                        <i class="fa-brands fa-stack-overflow"></i>
                    </a> 
                </div>
            </div>
        </div>
        {/* <button onClick={closeSidebar} className='close-btn'>&times;</button> */}
        <ul>
            <li><Link to="/" onClick={closeSidebar}>Home <i class="fa-solid fa-house"></i></Link></li>
            <li><Link to="/About" onClick={closeSidebar}>About <i class="fas fa-question-circle"></i></Link></li>
            {/* <li><Link to="/Portfolio" onClick={closeSidebar}>Portfolio <i class="fas fa-code"></i></Link></li> */}
            {/* <li><Link to="/Contact" onClick={closeSidebar}>Contact <i class="fa-solid fa-paper-plane"></i></Link></li> */}
            <li><Link to="/Resume" onClick={closeSidebar}>Resume <i class="fas fa-file-alt"></i></Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default SlideInNavBar;