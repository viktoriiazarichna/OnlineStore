import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import './ProductPage.css';

import {MainContext} from '../../context';
import { URL } from '../../constants/constants';
import {useSelector, useDispatch} from 'react-redux';

import {
  addAction,
  deleteAction
} from '../../redux/action-creators';

export default function ProductPage() {

  const counter = useSelector(({counter}) => counter);
  const dispatch = useDispatch();

  const {product, getProduct} = useContext(MainContext);

  const {categoryName, productName} = useParams();

  useEffect(() => {
    getProduct(categoryName, productName);
  }, [productName]);

  return (
    <>
      {product && (
        <div id={'productPage'}>
          <h2>{product.name}</h2>

          <img src={`${URL}${product.image}`} alt={product.name} className={'productPageImage'} />
          <div className={'productDescription'}>
            <p>Країна виробник - {product.country}</p>
            <p>Ціна - {product.price} грн. за {product.measurement} {product.measuringUnit}</p>
          </div>
          <div>{counter}</div>
          <button onClick={() => dispatch(addAction())}>add to cart</button>
          <button onClick={() => dispatch(deleteAction())}>delete</button>
        </div>
      )}
    </>
  )
}

