import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { MainContext } from '../../context';
import { URL } from '../../constants/constants';
import './Categories.css';

export default function Categories() {
  const {categories, getAllCategories} = useContext(MainContext);

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div id={'categories'}>
      {categories.map(category => (
        <Link to={`/${category.nameEnglish}`} key={category._id} >
          <div className={'oneCategory'}>
            <h3 className={'categoryName'}> {category.name} </h3>
            <img src={`${URL}${category.image}`} alt={category.name} className={'categoryImage'} />
          </div> 
        </Link>
      ))}
    </div>
  )
}


