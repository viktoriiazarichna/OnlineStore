import React from 'react';
import { Link } from 'react-router-dom';
import './Header-Footer.css';

export default function Header() {
  return (
    <header>
      <span id={'menu'}> menu </span>
      <h1 id={'mainTitle'}>
        <Link to={'/'} className={'headerLink'}> Еко-лавка </Link>
      </h1>
      <div>
        <Link to={'/login'} className={'headerLink'}> Увійти </Link>
        <span id={'cart'}>cart:0</span>
      </div>
    </header>
  )
}
