import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

import { MainContext } from '../../context';

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
            <img src={`http://localhost:5000/${category.image}`} alt={category.name} className={'categoryImage'} />
          </div> 
        </Link>
      ))}
    </div>
  )
}


