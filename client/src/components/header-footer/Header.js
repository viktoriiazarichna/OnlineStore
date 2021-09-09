import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header-Footer.css';

import { Menu } from '../menu';

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const handleOpenMenu = () => {
    setIsVisible(!isVisible);
  };

  return (
    <header>
      <button id={'menuButton'} onClick={handleOpenMenu}> Меню </button>
      <Menu isVisible={isVisible}/> 

      <h1 id={'mainTitle'}>
        <Link to={'/'} className={'headerLink'}> Вега-лавка </Link>
      </h1>

      <div>
        <Link to={'/login'} className={'headerLink'}> Увійти </Link>
        <span id={'cart'}>cart:0</span>
      </div>
    </header>
  )
}
