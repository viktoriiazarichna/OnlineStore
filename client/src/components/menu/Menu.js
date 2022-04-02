import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';
import { MainContext } from '../../context';

export default function Menu(props) {
  const { isVisibleMenu, setIsVisibleMenu } = props;
  const { categories, getAllCategories } = useContext(MainContext);
  const [isVisibleProductsList, setIsVisibleProductsList] = useState(false);

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <ul className={`categoriesMenu ${isVisibleMenu ? 'activeCategoriesMenu' : ''}`}>
      {categories.map(category => (
        <li className={'category'} key={category._id}>
          <Link to={`/${category.nameEnglish}`}> {category.name} </Link>
        </li>
      ))}
      
    </ul>
  )
}
