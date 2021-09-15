import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import './ProductPage.css';

import {MainContext} from '../../context';

export default function ProductPage() {
  const {product, getProduct} = useContext(MainContext);

  const {categoryName, productName} = useParams();

  useEffect(() => {
    getProduct(categoryName, productName);
  }, [productName]);

  return (
    <>
      {product && (
        <div id={'productPage'}>
          <h2>{product && product.name}</h2>

          <img src={`http://localhost:5000/${product.image}`} alt={product.name} className={'productPageImage'} />
          <div className={'productDescription'}>
            <p>Країна виробник - {product.country}</p>
            <p>Ціна - {product.price} грн. за {product.measurement} {product.measuringUnit}</p>
          </div>
        </div>
      )}
    </>
  )
}
