import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProductPage from '../products/ProductPage.js';
import { URL } from '../../constants/constants';
import { removeItemById } from '../../redux/cart/cart.actions';

const mapStateToProps = ({ cart: { cartItems }}) => ({
  items: cartItems,
  total: cartItems.reduce((acc, item) => acc += item.price * item.quantity, 0)
});

const Cart = ({ items, total }) => {

  return (
    <div>
      <h2> Корзина </h2>  
      <div className='cart__list'>
        {
          items.map(item => (
            <div>
              <h3 className={'productName'}>{item.name}</h3>
              <img src={`${URL}${item.image}`} alt={item.name} className={'productListImage'} />
              <button onClick={()=> removeItemById(item.id)}>Видалити</button>
            </div>
          ))}
      </div>
      <span className="cart__total-value">Всього до сплати:{total}.00 грн</span>    
    </div>
  )
};

export default  withRouter(
  connect(mapStateToProps)(Cart)
);