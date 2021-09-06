import React, { useState } from 'react';

import { httpRequest } from '../../helpers';

export default function Login() {
  const { request } = httpRequest();

  const [regUserData, setRegUserData] = useState({
    username: '',
    email: '',
    phone: '',
    address: '',
    password: ''
  });

  const updateUserData = (e) => {
    const {target: {name, value} } = e;

    setRegUserData({...regUserData, [name]: value });
  };

  const registration = async () => {
    await request('http://localhost:5000/registration', 'POST', { regUserData });

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
      <input value={regUserData.name} onChange={updateUserData} type="text" name="username" placeholder="ПІБ" />
      <br />
      <input value={regUserData.email} onChange={updateUserData} type="text" name="email" placeholder="емайл" />
      <br />
      <input value={regUserData.phone} onChange={updateUserData} type="number" name="phone" placeholder="телефон" />
      <br />
      <input value={regUserData.address} onChange={updateUserData} type="text" name="address" placeholder="адреса" />
      <br />
      <input value={regUserData.password} onChange={updateUserData} type="password" name="password" placeholder="пароль" />
      <br />
      <br />
      <button onClick={registration}>зареєструватись</button>
    </div>
  )
}
