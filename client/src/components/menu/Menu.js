import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './Menu.css';
import { MainContext } from '../../context';
import { localUrl } from '../../constants/constants';

export default function Menu(props) {
  const { isVisibleMenu } = props;
  const { categories, getAllCategories } = useContext(MainContext);

  useEffect(() => {
    getAllCategories();
  }, []);

  const history = useHistory();

  return (
    <ul className={`categoriesMenu ${isVisibleMenu ? 'activeCategoriesMenu' : ''}`}>
      {categories.map(category => (
        <li className={'category'} key={category._id}>
          {/* <Link to={`/${category.nameEnglish}`}> {category.name} </Link> */}
          {/* <p onClick={()=> history.push(`/${category.nameEnglish}`)}> {category.name}</p> */}
          <a href={`${localUrl}${category.nameEnglish}`}>{category.name}</a>
        </li>
      ))}      
    </ul>
  )
}
