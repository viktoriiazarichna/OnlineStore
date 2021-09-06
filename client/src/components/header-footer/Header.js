import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div> menu </div>
      <div>
        <Link to={'/'}> Головна </Link>
        <Link to={'/login'}> Увійти </Link>
        <span>cart:0</span>
      </div>
    </header>
  )
}
