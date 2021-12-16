import React, { useEffect, useContext, useState } from 'react';
import { MainContext } from '../../context';


export default function Order() {

  const {order, addOrder} = useContext(MainContext);

  const [addOrderData, setAddOrderData] = useState({
    name: '',
    phone: '',
    address: '',
    delivery: '',
    payment: '',
    comment: ''    
  }); 

  const [delivery, setDelivery] = useState(false);
  const [payment, setPayment] = useState(false);
  
  const handlePaymentChange = () => {
    setPayment(!payment);
  };

  const handleDeliveryChange = () => {
    setDelivery(!delivery);
  }


  const addOrderToDatabase = () => {
    try {
      addOrder('addOrder', 'POST', addOrderData);
    } catch (ex) {
      console.log(ex);
    }
    setAddOrderData({
      name: '',
      phone: '',
      address: '',
      delivery: '',
      payment: '',
      comment: '' 
    });
  };



  return (
    <div>
      <h2> Моє замовлення: </h2>
      <div className={'form'}>  
          <div>
            <label>Контактні дані </label>
            <input type="text" name="name" placeholder="enter your name"/>
            <input type="number" name="phone" placeholder="enter your phone number"/>
            <input type="text" name="address" placeholder="enter your address"/>            
          </div>
          <br/> 
          <label>Види доставки:</label>
            <select required="required" onChange={handleDeliveryChange} type="text" name="delivery">
              <option value="Адресна доставка кур'єром">Адресна доставка кур'єром</option>
              <option value="Самовивіз зі складу">Самовивіз зі складу</option>
            </select>
          <br/>   
          <label>Способи оплати:</label>
            <select required="required" onChange={handlePaymentChange} type="text" name="payment">
              <option value="Оплата готівкою при отриманні">Оплата готівкою при отриманні</option>
              <option value="Оплата картою при отриманні">Оплата картою при отриманні</option>
              <option value="Оплата онлайн">Оплата онлайн</option>
            </select>        
          <br/>  
          <div>
            <label>Додати коментар до замовлення </label>
            <input type="text" name="comment"/>            
          </div>

         

          <br/>   
              <button type="submit" onClick={addOrderToDatabase}>Підтвердити замовлення</button>
          <br/>        
          
        </div>
      
    </div>
  )
};

