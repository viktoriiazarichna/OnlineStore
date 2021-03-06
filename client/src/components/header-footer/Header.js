import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { Menu } from '../menu';
import { UserContext } from '../../context';
import './Header-Footer.css';

const mapStateToProps = state => ({
  itemsCount: state.cart.cartItems.reduce((acc, item) => acc += item.quantity, 0)
});

const Header = ({ onClick, theme, itemsCount }) => {
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);

  const {user, userRequestLogout} = useContext(UserContext);
  const history = useHistory();

  const handleOpenMenu = () => {
    setIsVisibleMenu(!isVisibleMenu);
  };

  const logout = () => {
    const accessToken = localStorage.getItem('accessToken');
    userRequestLogout('logout', 'PUT', {}, accessToken);
    localStorage.clear();
    window.location.reload(false);
  };

  return (
    <header>
      <button id={'menuButton'} onClick={handleOpenMenu}> Меню </button>
      <Menu isVisibleMenu={isVisibleMenu} setIsVisibleMenu={setIsVisibleMenu} /> 

      <h1 id={'mainTitle'}>
        <Link to={'/'} className={'headerLink'}> Вега-лавка </Link>
      </h1>

      <div className={'rightHeaderBlock'}>
        
        {!user ? <Link to={'/login'} className={'headerLink'} > Увійти </Link> : (
          <>
            <div onClick={() => history.push(`/accounts/${user._id}`)} id={'userBtn'}>
              {user.username[0]}
            </div>
            <button onClick={logout} id={'exit'}> Вийти </button>
          </>
        )}
        
        <div id={'cart'}>
            <Link className="cart-button__counter" to={'/cart'}> cart:{itemsCount} </Link>
        </div>
        <div className={'adminRight'}>
          {(user && localStorage.getItem('role') != null && localStorage.getItem('role').indexOf('Admin') !== -1) ? <Link to={'/addProductPage'}> ADMIN </Link> : <div></div>}
        </div>
      </div>

    </header>
  )
};

export default connect(mapStateToProps)(Header);
