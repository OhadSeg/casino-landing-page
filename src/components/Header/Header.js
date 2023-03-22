import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav style={{ backgroundColor: '#79c000' }}>
      <div className="nav-wrapper">
      <img src={require('../../assets/codereLogo.jpg')} alt='logo'/>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
        <button>accender</button>
        <button>Register</button>
        </ul>
      </div>
    </nav>
  );
}

export default Header;