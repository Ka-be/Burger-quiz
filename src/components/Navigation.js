import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // État pour gérer l'ouverture/fermeture du menu

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen); // Inverser l'état lorsque le bouton de bascule est cliqué
  };

  return (
    <div className="navigation">
      <Logo></Logo>
      <ul className={isNavOpen ? 'nav-open' : ''}> 
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Home</li>
        </NavLink>
        <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")} >
          <li>About</li>
        </NavLink>
      </ul>
      <button className="nav-toggle" onClick={handleNavToggle}>
        <span className={isNavOpen ? 'nav-toggle-icon-open' : 'nav-toggle-icon'}></span>
      </button>
    </div>
  );
};

export default Navigation;
