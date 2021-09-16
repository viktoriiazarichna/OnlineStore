import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Account.css';

import { UserContext } from '../../context';

export default function Login() {
  const [logUserData, setLogUserData] = useState({
    email: '',
    password: ''
  });

  const {user, userRequest} = useContext(UserContext);

  const updateUserData = (e) => {
    const {target: {name, value} } = e;

    setLogUserData({...logUserData, [name]: value });
  };

  const login = () => {
    userRequest('login', 'POST', logUserData);

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
      
      {user && <Redirect to={`/account/${user._id}`} />}
    </div>
  )
}
