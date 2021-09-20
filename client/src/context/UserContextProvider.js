import React, { useState } from 'react';

import { UserContext } from '.';
import { httpRequest } from '../helpers';
import { URL } from '../constants/constants';

export default function UserContextProvider({children}) {
  const { request } = httpRequest();

  const [user, setUser] = useState();

  const userRequest = async (route, method, body = null, token) => {
    let data;
    if (method === 'GET') {
      data = await request(`${URL}account/${route}`, method);
    } else if (token)  {
      await request(`${URL}account/${route}`, method, { body }, { 'Authorization': token });
    }
    else {
      data = await request(`${URL}account/${route}`, method, { body });
    }

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
