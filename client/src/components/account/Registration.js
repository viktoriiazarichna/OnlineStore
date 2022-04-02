import React, { useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Account.css';

import { UserContext } from '../../context';

export default function Registration() {
  const [regUserData, setRegUserData] = useState({
    username: '',
    email: '',
    phone: '',
    address: '',
    password: ''
  });

  const {user, userRequestLogin} = useContext(UserContext);

  const updateUserData = (e) => {
    const {name, value} = e.target;

    setRegUserData({...regUserData, [name]: value });
  };

  const registration = () => {
    userRequestLogin('registration', 'POST', regUserData);

    setRegUserData({
      username: '',
      email: '',
      phone: '',
      address: '',
      password: ''
    });
  };

  return (
    <div>
      <h2>Реєстрація</h2>

      <div className={'accForm'}>
        <div> 
          <label>Ім'я</label>
          <input value={regUserData.name} onChange={updateUserData} type="text" name="username" />
        </div>       

        <div>
          <label>Email</label>
          <input value={regUserData.email} onChange={updateUserData} type="text" name="email" />
        </div>
        <div>
          <label>Телефон</label>
          <input value={regUserData.phone} onChange={updateUserData} type="number" name="phone" />
        </div>
        <div>
          <label>Адреса</label>
          <input value={regUserData.address} onChange={updateUserData} type="text" name="address" />
        </div>
        <div>
          <label>Пароль</label>
          <input value={regUserData.password} onChange={updateUserData} type="password" name="password" />
        </div>
        
        <br />
        <button onClick={registration}>зареєструватись</button>
        <br />
        <Link to="/login" className={'regOrLogBtn'}>Увійти</Link>
      </div>

      {user && <Redirect to={`/accounts/${user._id}`} />}
    </div>
  )
}
