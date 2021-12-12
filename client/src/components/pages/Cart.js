import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { URL } from '../../constants/constants';
import { removeItemById } from '../../redux/cart/cart.actions';
import { useHistory } from 'react-router-dom';



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
      <div className='cart__list'>
        {
          items.map(item => (
            <div>
              <h3 className={'productName'}>{item.name}</h3>
              <img src={`${URL}${item.image}`} alt={item.name} className={'productListImage'} />
              <p>Ціна - {item.price} грн. за {item.measurement} {item.measuringUnit}</p>
              <p>Кількість - {item.quantity}</p>
              <p>Всього - {item.price*item.quantity} грн.</p>
              <button onClick={()=> dispatch(removeItemById(item._id))}>Видалити</button>                    
              
            </div>
          ))}
      </div>
      <span className="cart__total-value">Всього до сплати:{total}.00 грн</span>
      <br/> 
      <button onClick={()=> history.push("/order")}> Оформити замовлення </button>   
    </div>
  )
};

export default  withRouter(
  connect(mapStateToProps)(Cart)
);