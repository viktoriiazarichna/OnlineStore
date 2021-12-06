import React, { useState } from 'react';

import { MainContext } from '.';
import { httpRequest } from '../helpers';
import { URL } from '../constants/constants';

export default function MainContextProvider({children}) {
  const { request } = httpRequest();

  const [categories, setCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [product, setProduct] = useState();


  const getAllCategories = async () => {
    const data = await request(`${URL}categories`);

    setCategories(data);
  };

  const getAllProductsOfOneCategory = async (categoryName) => {
    const data = await request(`${URL}catalog/${categoryName}`);

    setAllProducts(data);
  };

  const getProduct = async (categoryName, productName) => {
    const data = await request(`${URL}catalog/${categoryName}/${productName}`);

    setProduct(data);
  };

  const addProduct = async (route, method, body = null) => {
    const data = await request(`${URL}product/${route}`, method, { body });
    setProduct(data.product);
    
    localStorage.setItem('productId', data.product._id);
    
  };

  return (
    <MainContext.Provider value={{
      categories,
      getAllCategories,
      allProducts,
      getAllProductsOfOneCategory,
      product,
      getProduct
    }}>
      {children}
    </MainContext.Provider>
  )
}
