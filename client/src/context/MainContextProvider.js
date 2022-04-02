import React, { useState } from 'react';

import { MainContext } from '.';
import { httpRequest } from '../helpers';
import { URL } from '../constants/constants';

export default function MainContextProvider({children}) {
  const { request } = httpRequest();

  const [categories, setCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [order, setOrder] = useState([]);


  const getAllCategories = async () => {
    const data = await request(`${URL}categories`);

    setCategories(data);
  };

  const getAllProductsOfOneCategory = async (categoryName, pageNumber) => {
    const data = await request(`${URL}catalogs/${categoryName}`, 'POST', {params: {categoryName, pageNumber}});
    const result = [];
    data.forEach(function (elem) {
      if(allProducts.some(({categoryName}) => categoryName !== elem.categoryName)){
        setAllProducts([]);
      }
      if (!allProducts.some(({_id}) => _id === elem._id)){
        result.push(elem);
      }
    });
    setAllProducts(old => [...old, ...result]);
  };

  const getProduct = async (categoryName, productName) => {
    const data = await request(`${URL}catalogs/${categoryName}/${productName}`);

    setProduct(data);
  };

  const addProduct = async (route, method, body = null) => {
    const data = await request(`${URL}catalogs/`, method, { body });
    setProduct(data.product);
    console.log(body)
  };

  const uploadFile = async (route, method, body = null) => {
    const data = await request(`${URL}catalogs/${route}`, method, { body });
    setProduct(data.product);
    console.log(body)
  };

  const addOrder = async (method, body = null) => {
    const data = await request(`${URL}orders/`, method, { body });
    setOrder(data.order);
    console.log(body)
  };


  return (
    <MainContext.Provider value={{
      categories,
      getAllCategories,
      allProducts,
      getAllProductsOfOneCategory,
      product,
      getProduct,
      addProduct,
      uploadFile,
      order,
      addOrder
    }}>
      {children}
    </MainContext.Provider>
  )
}
