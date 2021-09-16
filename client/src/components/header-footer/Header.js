import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header-Footer.css';

import { Menu } from '../menu';
import { UserContext } from '../../context';

export default function Header() {
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);

  const {user, userRequest} = useContext(UserContext);

  const handleOpenMenu = () => {
    setIsVisibleMenu(!isVisibleMenu);
  };

  const logout = () => {
    userRequest('logout', 'PUT', {id: user._id});
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
