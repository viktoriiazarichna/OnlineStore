import React from 'react';
import { Link } from 'react-router-dom';
import './Header-Footer.css';

export default function Header() {
  return (
    <header>
      <span> menu </span>
      <div className="headerBlock">
        <div className={'headerLinkBlock'}>
          <h1>
            <Link to={'/'} className={'headerLink', 'mainTitle'}> Еко-лавка </Link>
          </h1>
          <Link to={'/login'} className={'headerLink'}> Увійти </Link>
        </div>
        <span>cart:0</span>
      </div>
    </header>
  )
}
