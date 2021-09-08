import React, { useState } from 'react';

import { MainContext } from '.';
import { httpRequest } from '../../helpers';

export default function MainContextProvider({children}) {
  const { request } = httpRequest();

  const [categories, setCategories] = useState([]);

  const getAllCategories = async () => {
    const data = await request('http://localhost:5000/categories');

    setCategories(data);
  }

  return (
    <MainContext.Provider value={{
      categories,
      getAllCategories
    }}>
      {children}
    </MainContext.Provider>
  )
}
