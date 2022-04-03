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

  const [validation, setValidation] = useState({
    username: '',
    email: '',
    phone: '',
    password: ''
  });

  
  const {user, userRequestLogin} = useContext(UserContext);

  const updateUserData = (e) => {
    const {name, value} = e.target;    
    checkValidation(name, value);
    setRegUserData({...regUserData, [name]: value });
  };

  const checkValidation = (name, value) => {
    const errors = {
      username: '',
      email: '',
      phone: '',
      password: ''
    };

    if(name === "username"){
      const usernameCond = /^[a-zA-Z||а-яА-Я]+$/;

      if (!value.trim()) {
        errors.username = "First name is required";
        document.getElementById("registrationButton").disabled = true;
      } else if (!usernameCond.test(value)) {
        errors.username = "Name must contain only letters";
        document.getElementById("registrationButton").disabled = true;
      } else{
        errors.username = "";
        document.getElementById("registrationButton").disabled = false;
      }
    } 
    
    if(name === "email") {
      const emailCond =
      "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
      if (!value.trim()) {
        errors.email = "Email is required";
        document.getElementById("registrationButton").disabled = true;
      } else if (!value.match(emailCond)) {
        errors.email = "Please provide a valid email address";
        document.getElementById("registrationButton").disabled = true;
      } else {
        errors.email = "";
        document.getElementById("registrationButton").disabled = false;
      };
    }
    
    if(name === "password"){
      const cond = /^[0-9]+$/;
      const password = value;
      if (!password) {
        errors.password = "password is required";
        document.getElementById("registrationButton").disabled = true;
      } else if (password.length < 2) {
        errors.password = "Password must be longer than 5 characters";
        document.getElementById("registrationButton").disabled = true;
      } else if (!cond.test(password)) {
        errors.password = "Password must contain at least a number";
        document.getElementById("registrationButton").disabled = true;
      } else {
        errors.password = "";
        document.getElementById("registrationButton").disabled = false;
      }
    } 
    
    if(name === "phone"){
      const phonecond = /^(?:\+38)?(0\d{9})$/;
      const phone = value;
      if (!phone) {
        errors.phone = "Phone is required";
        document.getElementById("registrationButton").disabled = true;
      } else if (!phonecond.test(phone)) {
        errors.phone = "Please provide valid phone number";
        document.getElementById("registrationButton").disabled = true;
      } else {
        errors.phone = "";
        document.getElementById("registrationButton").disabled = false;
      }
    }
    

    setValidation({ ...validation, [name]: errors[name] });
  };



  
  const registration = () => {
    userRequestLogin('registration', 'POST', regUserData);

    setRegUserData({
      username: '',
      email: '',
      phone: '',
      password: ''
    });


  };

  return (
    <div>
      <h2>Реєстрація</h2>

      <div className={'accForm'}>
        <div> 
          <label>Ім'я{(validation.username !== "") ? " ("+validation.username+")" : ""}</label>
          <input value={regUserData.name} onChange={updateUserData} type="text" name="username" />
        </div>       

        <div>
          <label>Email{(validation.email !== "") ? " ("+validation.email+")" : ""}</label>
          <input value={regUserData.email} onChange={updateUserData} type="text" name="email" />
          
        </div>
        <div>
          <label>Телефон{(validation.phone !== "") ? " ("+validation.phone+")" : ""}</label>
          <input value={regUserData.phone} onChange={updateUserData} type="text" name="phone" />
        </div>
        <div>
          <label>Адреса</label>
          <input value={regUserData.address} onChange={updateUserData} type="text" name="address" />
        </div>
        <div>
          <label>Пароль{(validation.password !== "") ? " ("+validation.password+")" : ""}</label>
          <input value={regUserData.password} onChange={updateUserData} type="password" name="password" />
        </div>
        
        <br />
        <button onClick={registration} id="registrationButton">зареєструватись</button>
        <br />
        <Link to="/login" className={'regOrLogBtn'}>Увійти</Link>
      </div>

      {user && <Redirect to={`/accounts/${user._id}`} />}
    </div>
  )
}
