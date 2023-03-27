import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav style={{ backgroundColor: '#79c000' }}>
      <div className="nav-wrapper">
        <img className='logo-image' src={require('../../assets/codereLogo.jpg')} alt="logo" />
        <ul id="nav-mobile" className="hide-on-med-and-down">
          { window.innerWidth > 500 ? (
            <>
              <button>accender</button>
              <button>Register</button>
            </>
          ) : (
            <button>Register</button>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
