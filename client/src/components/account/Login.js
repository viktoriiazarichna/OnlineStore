import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Account.css';

import { UserContext } from '../../context';

export default function Login() {
  const [logUserData, setLogUserData] = useState({
    email: '',
    password: ''
  });

  const {user, userRequestLogin} = useContext(UserContext);

  const updateUserData = (e) => {
    const {name, value} = e.target;

    setLogUserData({...logUserData, [name]: value });
  };

  const login = () => {
    userRequestLogin('login', 'POST', logUserData);

    setLogUserData({
      email: '',
      password: ''
    });

  };

  return (
    <div>
      <h2>Вхід</h2>

      <div className={'accForm'}>
        <div>
          <label>Email</label>
          <input value={logUserData.email} onChange={updateUserData} type="text" name="email" />
        </div>
        <div>
          <label>Пароль</label>
          <input value={logUserData.password} onChange={updateUserData} type="password" name="password" />
        </div>
        
        <br />
        <button onClick={login}>увійти</button>
        <br />
        <Link to="/registration" className={'regOrLogBtn'}>зареєструватись</Link> 
      </div>
      
      {user && <Redirect push to={`/accounts/${user._id}`} />}
    </div>
  )
}
