import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { MainContext } from "../../context";
import { URL } from '../../constants/constants';
import './ProductsList.css';

export default function ProductsList() {
  const {allProducts, getAllProductsOfOneCategory} = useContext(MainContext);
  const {categoryName} = useParams();
  const [pageName, setPageName] = useState(null);

  

  const changePageTitle = () => {
    if (categoryName === 'fruits') {
      setPageName('Фрукти');
    } else if (categoryName === 'vegetables') {
      setPageName('Овочі');
    } else if (categoryName === 'greens') {
      setPageName('Зелень')
    }
  };

  useEffect(() => {
    changePageTitle();
    getAllProductsOfOneCategory(categoryName, 0);
  }, []);

  

  return (
    <div>
      <h2>{pageName}</h2>
      
      
      

      <div id={'productsList'}>
        {allProducts.map(product => (
          <Link to={`/${categoryName}/${product.nameEnglish}`} key={product._id} className={'oneProduct'}>
            <div>
              <h3 className={'productName'}>{product.name}</h3>
              <img src={`${URL}${product.image}`} alt={product.name} className={'productListImage'} />
            </div>
          </Link>
        ))}
      </div>
      <button onClick={() => {
        let pageNumber = allProducts.length/3;
        getAllProductsOfOneCategory(categoryName, pageNumber);
      }}> Завантажити ще </button>
    </div>
  )
}