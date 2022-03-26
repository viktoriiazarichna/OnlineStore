import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';

import {MainContext} from '../../context';
import { URL } from '../../constants/constants';
import { addItem } from '../../redux/cart/cart.actions';
import './ProductPage.css';

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

const ProductPage = ({ item, addItem }) => {
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
          <button onClick={() => addItem(product)}>В кошик</button>
        </div>
      )}
    </>
  )
};

export default connect(null, mapDispatchToProps)(ProductPage);