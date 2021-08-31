import React, { useState } from 'react'

export default function Login() {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    phone: '',
    address: ''
  });

  const updateUserData = (e) => {
    const {target: {name, value} } = e;

    setUserData({...userData, [name]: value });
  };

  const registr = () => {
    setUserData({
      username: '',
      email: '',
      phone: '',
      address: ''
    });
  };

  return (
    <div>
      <h2>Реєстрація</h2>
      <input value={userData.name} onChange={updateUserData} type="text" name="username" placeholder="ПІБ" />
      <br />
      <input value={userData.email} onChange={updateUserData} type="email" name="email" placeholder="емайл" />
      <br />
      <input value={userData.phone} onChange={updateUserData} type="text" name="phone" placeholder="телефон" />
      <br />
      <input value={userData.address} onChange={updateUserData} type="text" name="address" placeholder="адреса" />
      <br />
      <br />
      <button onClick={registr}>зареєструватись</button>
    </div>
  )
}
