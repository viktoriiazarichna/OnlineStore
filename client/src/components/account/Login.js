import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Account.css';

import { httpRequest } from '../../helpers';

export default function Login(props) {
  const { request } = httpRequest();

  const [logUserData, setLogUserData] = useState({
    email: '',
    password: ''
  });

  const {user, setUser} = props;

  const updateUserData = (e) => {
    const {target: {name, value} } = e;

    setLogUserData({...logUserData, [name]: value });
  };

  const login = async () => {
    const data = await request('http://localhost:5000/account/login', 'POST', { logUserData });

    setLogUserData({
      email: '',
      password: ''
    });

    setUser(data);
  };

  return (
    <div>
      <h2>Вхід</h2>

      <div className={'accForm'}>
        <div>
          <label>Email</label>
          <input value={logUserData.email} onChange={updateUserData} type="text" name="email" placeholder="емайл" />
        </div>
        <div>
          <label>Пароль</label>
          <input value={logUserData.password} onChange={updateUserData} type="password" name="password" placeholder="пароль" />
        </div>
        
        <br />
        <button onClick={login}>увійти</button>
        <br />
        <Link to="/registration" className={'regOrLogBtn'}>зареєструватись</Link> 
      </div>
      
      {user && <Redirect to={`/account/${user._id}`} />}
    </div>
  )
}
