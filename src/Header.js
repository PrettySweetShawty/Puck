import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="logo-container">
        <img src="/logo.png" alt="Logo" className="logo-image" />
        <h1 className="logo-text">Dota 2</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#hero">Герои</a></li>
          <li><a href="#abilities">Способности</a></li>
          <li><a href="#about">О нас</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
