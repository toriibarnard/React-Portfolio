import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import './header-footer.css';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext); // get theme and toggle func

  return (
    <header>
      <Link className="logo" to="/">Torii Barnard</Link>
      <nav>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
      </nav>
    </header>
  );
}

export default Header;
