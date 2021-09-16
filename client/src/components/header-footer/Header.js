import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header-Footer.css';

import { Menu } from '../menu';

export default function Header() {
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);

  const handleOpenMenu = () => {
    setIsVisibleMenu(!isVisibleMenu);
  };

  return (
    <header>
      <button id={'menuButton'} onClick={handleOpenMenu}> Меню </button>
      <Menu isVisibleMenu={isVisibleMenu} setIsVisibleMenu={setIsVisibleMenu} /> 

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
