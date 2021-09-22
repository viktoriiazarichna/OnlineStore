import React, { useState } from 'react';

import { UserContext } from '.';
import { httpRequest } from '../helpers';
import { URL } from '../constants/constants';

export default function UserContextProvider({children}) {
  const { request } = httpRequest();

  const [user, setUser] = useState();

  const userRequest = async (route, method, body = null) => {
    let data;
    if (method === 'GET') {
      data = await request(`${URL}account/${route}`, method);
    } else {
      data = await request(`${URL}account/${route}`, method, { body });
    }

    setUser(data.user);

    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
  };

  const userRequestLogout = async (route, method, body = null, token) => {
    await request(`${URL}account/${route}`, method, { body }, { 'Authorization': token });

    setUser(null);

    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  };

  return (
    <UserContext.Provider value={{
      user,
      userRequest,
      userRequestLogout
    }}>
      {children}
    </UserContext.Provider>
  )
}
