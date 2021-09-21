import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import './Account.css';

import { UserContext } from '../../context';

export default function Account() {
  const {user} = useContext(UserContext);

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
