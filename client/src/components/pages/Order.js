import React, { useEffect, useContext, useState } from 'react';
import { MainContext } from '../../context';
import { connect, useDispatch } from 'react-redux';

const mapStateToProps = ({ cart: { cartItems }}) => ({
  items: cartItems,
  total: cartItems.reduce((acc, item) => acc += item.price * item.quantity, 0)
});

const Order = ({ items, total }) => {

  const {order, addOrder} = useContext(MainContext);

  const [addOrderData, setAddOrderData] = useState({
    name: '',
    phone: '',
    address: '',
    delivery: '',
    payment: '',
    comment: '',
    totalPrice: '',
    products: [] 
  }); 


  const deliveryOptions = [
    "Адресна доставка кур'єром",
    "Самовивіз зі складу"
  ];

  const paymentOptions = [
    "Оплата готівкою при отриманні",
    "Оплата картою при отриманні",
    "Оплата онлайн"
  ];

  const updateOrderData = (e) => {
    const {name, value} = e.target;

    if (!addOrderData.totalPrice || !addOrderData.products){
      let productsArray = [];
      items.map(item => (
        productsArray.push({ product: item._id, quantity: item.quantity})
      ));

      setAddOrderData({...addOrderData, products: productsArray, totalPrice: total, [name]: value });
      return;
    }
    setAddOrderData({...addOrderData, [name]: value });
  };

  const addOrderToDatabase = () => {
    try {
      addOrder('addOneOrder', 'POST', addOrderData);
    } catch (ex) {
      console.log(ex);
    }
    setAddOrderData({
      name: '',
      phone: '',
      address: '',
      delivery: '',
      payment: '',
      comment: '',
      totalPrice: '',
      products: ''
    });
  };



  return (
    <div>
      <h2> Моє замовлення: </h2>
      <div className={'form'}> 
          <div>
            <label>Контактні дані</label>
            <input value={addOrderData.name} onChange={updateOrderData} type="text" name="name" placeholder="enter your name"/>
            <input value={addOrderData.phone} onChange={updateOrderData} type="number" name="phone" placeholder="enter your phone number"/>
            <input value={addOrderData.address} onChange={updateOrderData} type="text" name="address" placeholder="enter your address"/>            
          </div>
          <br/> 
          <label>Види доставки:</label>
            <select value={addOrderData.delivery} onChange={updateOrderData} type="text" name="delivery">
              {deliveryOptions.map((deliveryOption) => (
              <option value={deliveryOption}>{deliveryOption}</option>
            ))}
            </select>
          <br/>   
          <label>Способи оплати:</label>
            <select value={addOrderData.payment} onChange={updateOrderData} type="text" name="payment">
            {paymentOptions.map((paymentOption) => (
              <option value={paymentOption}>{paymentOption}</option>
            ))}
            </select>        
          <br/>  
          <div>
            <label>Додати коментар до замовлення </label>
            <input value={addOrderData.comment} onChange={updateOrderData} type="text" name="comment"/>            
          </div>

         

          <br/>   
              <button type="submit" onClick={addOrderToDatabase}>Підтвердити замовлення</button>
          <br/>        
          
        </div>
      
    </div>
  )
};

export default connect(mapStateToProps)(Order);
