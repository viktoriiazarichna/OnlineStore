import React, { useState } from 'react';

import { MainContext } from '.';
import { httpRequest } from '../helpers';

export default function MainContextProvider({children}) {
  const { request } = httpRequest();

  const [categories, setCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const getAllCategories = async () => {
    const data = await request('http://localhost:5000/categories');

    setCategories(data);
  };

  const getAllProductsOfOneCategory = async (categoryName) => {
    const data = await request(`http://localhost:5000/catalog/${categoryName}`);

    setAllProducts(data);
  };

  return (
    <MainContext.Provider value={{
      categories,
      getAllCategories,
      allProducts,
      getAllProductsOfOneCategory
    }}>
      {children}
    </MainContext.Provider>
  )
}
