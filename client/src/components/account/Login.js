import React, { useState } from 'react';

import { httpRequest } from '../../helpers';

export default function Login() {
  const { request } = httpRequest();

  const [logUserData, setLogUserData] = useState({
    email: '',
    password: ''
  });

  const [user, setUser] = useState();

  const updateUserData = (e) => {
    const {target: {name, value} } = e;

    setLogUserData({...logUserData, [name]: value });
  };

  const login = async () => {
    const data = await request('http://localhost:5000/login', 'POST', { logUserData });

    setLogUserData({
      email: '',
      password: ''
    });

    setUser(data);
  };

  return (
    <div>
      <h2>Вхід</h2>
      <input value={logUserData.email} onChange={updateUserData} type="text" name="email" placeholder="емайл" />
      <br />
      <input value={logUserData.password} onChange={updateUserData} type="password" name="password" placeholder="пароль" />
      <br />
      <br />
      <button onClick={login}>увійти</button>
      <br />
    </div>
  )
}
