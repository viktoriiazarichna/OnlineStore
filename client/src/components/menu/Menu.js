import React, { useEffect, useContext } from 'react';

import './Menu.css';
import { MainContext } from '../../context';
import { localUrl } from '../../constants/constants';

export default function Menu(props) {
  const { isVisibleMenu } = props;
  const { categories, getAllCategories } = useContext(MainContext);

  useEffect(() => {
    getAllCategories();
  }, []);
  
  return (
    <ul className={`categoriesMenu ${isVisibleMenu ? 'activeCategoriesMenu' : ''}`}>
      {categories.map(category => (
        <li className={'category'} key={category._id}>
          <a href={`${localUrl}${category.nameEnglish}`}>{category.name}</a>
        </li>
      ))}      
    </ul>
  )
}
