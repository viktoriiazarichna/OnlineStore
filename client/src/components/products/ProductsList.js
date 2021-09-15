import React, {useContext, useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import './ProductsList.css';

import { MainContext } from "../../context";

export default function ProductsList() {
  const {allProducts, getAllProductsOfOneCategory} = useContext(MainContext);
  const {nameEnglish} = useParams();
  const [pageName, setPageName] = useState(null);

  const changePageTitle = () => {
    if (nameEnglish === 'fruits') {
      setPageName('Фрукти');
    } else if (nameEnglish === 'vegetables') {
      setPageName('Овочі');
    } else if (nameEnglish === 'greens') {
      setPageName('Зелень')
    }
  };

  useEffect(() => {
    changePageTitle();
    getAllProductsOfOneCategory(nameEnglish);
  }, [allProducts]);

  return (
    <div>
      <h2>{pageName}</h2>

      <div id={'productsList'}>
        {allProducts.map(product => (
          <Link to={`/${product.nameEnglish}`} key={product._id} className={'oneFruits'}>
            <div>
              <h3 className={'fruitsName'}>{product.name}</h3>
              <img src={`http://localhost:5000/${product.image}`} alt={product.name} className={'productImage'} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}