import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';

import { URL } from '../../constants/constants';
import { removeItemById } from '../../redux/cart/cart.actions';
import './cart.css';

const mapStateToProps = ({ cart: { cartItems }}) => ({
  items: cartItems,
  total: cartItems.reduce((acc, item) => acc += item.price * item.quantity, 0)
});

const Cart = ({ items, total }) => {

  const dispatch = useDispatch();

  const history = useHistory();

  return (
    <div>
      <h2> Корзина </h2>  
      <div>
        {
          items.map(item => (
            <div className='productInCart'>              
              <img src={`${URL}${item.image}`} alt={item.name} className='itemImage' />
              <h3 className='itemName'>{item.name}</h3>
              <div className='itemInfo'>
                <p>Ціна - {item.price} грн за {item.measurement} {item.measuringUnit}</p>
                <p>Кількість - {item.quantity}</p>
                <p>Всього - {item.price*item.quantity} грн</p>
              </div>

              <button onClick={()=> dispatch(removeItemById(item._id))}>Видалити</button>                    
              
            </div>
          ))}
      </div>
      
      <div className="order">Всього до сплати: {total}.00 грн</div>
      <div className="order">        
        <button onClick={()=> history.push("/orders")}> Оформити замовлення</button>
      </div>
         
    </div>
  )
};

export default  withRouter(
  connect(mapStateToProps)(Cart)
);