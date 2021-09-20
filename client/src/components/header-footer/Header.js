import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Header-Footer.css';
import AccountLogo from '../../images/account.png';

import { Menu } from '../menu';
import { UserContext } from '../../context';

export default function Header() {
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);

  const {user, userRequest} = useContext(UserContext);
  const history = useHistory();

  const handleOpenMenu = () => {
    setIsVisibleMenu(!isVisibleMenu);
  };

  const logout = () => {
    userRequest('logout', 'PUT', {}, user.accessToken);
  };

  return (
    <header>
      <button id={'menuButton'} onClick={handleOpenMenu}> Меню </button>
      <Menu isVisibleMenu={isVisibleMenu} setIsVisibleMenu={setIsVisibleMenu} /> 

      <h1 id={'mainTitle'}>
        <Link to={'/'} className={'headerLink'}> Вега-лавка </Link>
      </h1>

      <div className={'rightHeaderBlock'}>
        {!user ? <Link to={'/login'} className={'headerLink'}> Увійти </Link> : (
          <>
            <div onClick={() => history.push(`/account/${user._id}`)} id={'userBtn'}>
              <img src={AccountLogo} alt={'особистий кабінет'} id={'accountLogo'} />
            </div>
            <button onClick={logout} id={'exit'}> Вийти </button>
          </>
        )}
        <span id={'cart'}>cart:0</span>
      </div>
    </header>
  )
}
