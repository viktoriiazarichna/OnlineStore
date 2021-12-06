import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

import { MainContext } from '../../context';
import { AddProductPage } from '../pages';

export default function Menu(props) {
  const { isVisibleMenu, setIsVisibleMenu } = props;
  const { categories, getAllCategories,  allProducts, getAllProductsOfOneCategory } = useContext(MainContext);
  const [isVisibleProductsList, setIsVisibleProductsList] = useState(false);

  useEffect(() => {
    getAllCategories();
  }, [getAllCategories]);

  const selectCaterogy = (categoryName) => {
    getAllProductsOfOneCategory(categoryName);
    setIsVisibleProductsList(true);
  };
  const cancelSelectCategory = () => {
    setIsVisibleProductsList(false);
    setIsVisibleMenu(false);
  };

  return (
    <nav onMouseLeave={cancelSelectCategory}>
      <ul className={`categoriesMenu ${isVisibleMenu ? 'activeCategoriesMenu' : ''}`}>
        {categories.map(category => (
          <li className={'category'} key={category._id}>
            <Link to={`/${category.nameEnglish}`} onMouseOver={() => selectCaterogy(category.nameEnglish)}> {category.name} </Link>

            <ul className={`productsMenu ${isVisibleProductsList ? 'activeProductsListMenu': ''}`}>
              {allProducts.map(product => (
                <li key={product._id}>
                  <Link to={`/${category.nameEnglish}/${product.nameEnglish}`}> {product.name} </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
        {
          (localStorage.getItem('role') != null && localStorage.getItem('role').indexOf('Admin') !== -1) && (<li> <Link to="/addProductPage">Add Product</Link>  </li>)
        }
      </ul>
    </nav>
  )
}
