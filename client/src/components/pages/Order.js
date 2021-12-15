import React, { useEffect, useContext, useState } from 'react';
import { MainContext } from '../../context';


export default function Order() {

  const {order, addOrder} = useContext(MainContext);

  const [addOrderData, setAddOrderData] = useState({
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
      delivery: '',
      payment: '',
      comment: '' 
    });
  }

  return (
    <div>
      <h2> Моє замовлення: </h2>
      <div className={'form'}>  
          <div>
            <label>Контактні дані </label>
            <input type="text" name="name"/>
            <input type="number" name="phone"/>
            <input type="text" name="address"/>            
          </div>
          <div>
            <div>Види доставки:</div>
            <label><input type="radio" checked={delivery} onChange={handleDeliveryChange}/>Адресна доставка кур'єром</label>
            <br/>
            <label><input type="radio" onChange={handleDeliveryChange}/>Самовивіз зі складу</label>         
          </div>
          <br/>         
          <div>
            <div>Способи оплати:</div>
            <label><input type="radio" checked={payment} onChange={handlePaymentChange}/>Оплата готівкою при отриманні</label>
            <br/>
            <label><input type="radio" onChange={handlePaymentChange}/>Оплата картою при отриманні</label>
            <br/>
            <label><input type="radio" onChange={handlePaymentChange}/>Оплата онлайн</label>        
            
          </div>
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
}