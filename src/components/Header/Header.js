import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../common/Logo';


const Header = () => (
  <header>
    <div className="logo">
      <Link to="/">
        <Logo/>
      </Link>
    </div>
    <nav>
      <ul>
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;
