import React from 'react';
import logo from '../assets/NE_logo.png'

const Nav = () => {
    return (
        <nav className='nav__container'>
            <div className="nav__left">
                <h1 className="nav__title">Noted Essentials</h1>
                <img className="nav__img" src={logo} alt="" />
            </div>
            <div className="nav__middle">
            <ul className="nav__tabs">
                <li className="nav__tab">Home</li>
                <li className="nav__tab">Covers</li>
                <li className="nav__tab">Sheets</li>
            </ul>
            </div>
            <div className="nav__right">
                <li className="nav__tab">Cart</li>
            </div>
        </nav>
    );
}

export default Nav;
    
  
