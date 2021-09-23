import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './Account.css';

import { UserContext } from '../../context';

export default function Account() {  const {user, userRequest} = useContext(UserContext);

  const accessToken = localStorage.getItem('accessToken');
  const id = localStorage.getItem('userId');

  useEffect(() => {
    userRequest(id);
  }, [accessToken]);

  return (
    <div>
      {user && (
        <div>
          <h2>{user.username}</h2>

          <ul>
            <li>Email: {user.email}</li>
            <li>Телефон: {user.phone}</li>
            <li>Адреса: {user.address}</li>
          </ul>
        </div>
      )}

      {!user && <Redirect to={'/'} />}
    </div>
  )
}
