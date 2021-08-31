import React, { useState } from 'react';

export default function Login() {
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

  const registration = () => {
    console.log(regUserData);

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
      <input value={regUserData.email} onChange={updateUserData} type="email" name="email" placeholder="емайл" />
      <br />
      <input value={regUserData.phone} onChange={updateUserData} type="text" name="phone" placeholder="телефон" />
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
