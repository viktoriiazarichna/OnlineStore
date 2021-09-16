import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Account.css';

import { httpRequest } from '../../helpers';

export default function Registration(props) {
  const { request } = httpRequest();

  const [regUserData, setRegUserData] = useState({
    username: '',
    email: '',
    phone: '',
    address: '',
    password: ''
  });

  const {user, setUser} = props;

  const updateUserData = (e) => {
    const {target: {name, value} } = e;

    setRegUserData({...regUserData, [name]: value });
  };

  const registration = async () => {
    const data = await request('http://localhost:5000/account/registration', 'POST', { regUserData });

    setRegUserData({
      username: '',
      email: '',
      phone: '',
      address: '',
      password: ''
    });

    setUser(data);
  };

  return (
    <div>
      <h2>Реєстрація</h2>

      <div className={'accForm'}>
        <div> 
          <label>ПІБ</label>
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
        <Link to="/login" className={'regOrLogBtn'}>увійти</Link>
      </div>

      {user && <Redirect to={`/account/${user._id}`} />}
    </div>
  )
}
