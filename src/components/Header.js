import React from 'react';
import { Link } from 'react-router-dom';
import './header-footer.css'; // Import styles for header

function Header() {
  return (
    <header>
      <Link className="logo" to="/">Torii Barnard</Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </nav>
    </header>
  );
}

export default Header;
