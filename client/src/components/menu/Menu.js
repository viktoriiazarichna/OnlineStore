import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

import { MainContext } from '../../context';

export default function Menu(props) {
  const { isVisibleMenu } = props;
  const { categories, getAllCategories,  allProducts, getAllProductsOfOneCategory } = useContext(MainContext);
  const [isVisibleProductsList, setIsVisibleProductsList] = useState(false);

  useEffect(() => {
    getAllCategories();
  }, []);

  const selectCaterogy = (categoryName) => {
    getAllProductsOfOneCategory(categoryName);
    setIsVisibleProductsList(true);
  };
  const cancelSelectCategory = () => {
    setIsVisibleProductsList(false);
  };

  return (
    <nav >
      <ul className={`categoriesMenu ${isVisibleMenu ? 'activeCategoriesMenu' : ''}`} >
        {categories.map(category => (
          <li className={'category'} key={category._id}>
            <Link to={`/${category.nameEnglish}`} onMouseOver={() => selectCaterogy(category.nameEnglish)} onMouseOut={cancelSelectCategory}> {category.name} </Link>

            <ul className={`productsMenu ${isVisibleProductsList ? 'activeProductsListMenu': ''}`}>
              {allProducts.map(product => (
                <li key={product._id}>
                  <Link to={`/${category.nameEnglish}/${product.nameEnglish}`}> {product.name} </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}
