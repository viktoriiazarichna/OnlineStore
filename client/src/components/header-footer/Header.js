import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header-Footer.css';

import { Menu } from '../menu';

export default function Header(props) {
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);

  const {user, setUser} = props;

  const handleOpenMenu = () => {
    setIsVisibleMenu(!isVisibleMenu);
  };

  const logout = async () => {
    setUser(null);
  };

  return (
    <header>
      <button id={'menuButton'} onClick={handleOpenMenu}> Меню </button>
      <Menu isVisibleMenu={isVisibleMenu} setIsVisibleMenu={setIsVisibleMenu} /> 

      <h1 id={'mainTitle'}>
        <Link to={'/'} className={'headerLink'}> Вега-лавка </Link>
      </h1>

      <div>
        {!user ? <Link to={'/login'} className={'headerLink'}> Увійти </Link> : <button onClick={logout} id={'exit'}> Вийти </button>}
        <span id={'cart'}>cart:0</span>
      </div>
    </header>
  )
}
