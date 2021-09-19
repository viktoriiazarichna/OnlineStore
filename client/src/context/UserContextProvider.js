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
console.log(data);
    setUser(data);
  };

  return (
    <UserContext.Provider value={{
      user,
      userRequest
    }}>
      {children}
    </UserContext.Provider>
  )
}
