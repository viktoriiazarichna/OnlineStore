import React, { useState } from 'react';

import { UserContext } from '.';
import { httpRequest } from '../helpers';

export default function UserContextProvider({children}) {
  const { request } = httpRequest();

  const [user, setUser] = useState();

  const userRequest = async (route, method, body = null) => {
    let data;
    if (method === 'GET') {
      data = await request(`http://localhost:5000/account/${route}`, method);
    } else {
      data = await request(`http://localhost:5000/account/${route}`, method, { body });
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
