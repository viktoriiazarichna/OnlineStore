import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

import { httpRequest } from '../../helpers';

export default function Categories() {
  const { request } = httpRequest();

  const [categories, setCategories] = useState([]);

  const getAllCategories = async () => {
    const data = await request('http://localhost:5000/categories');

    setCategories(data);
  }

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div id={'categoies'}>
      {categories.map(category => (
        <Link to={`/${category.nameEnglish}`} key={category._id} >
          <div className={'oneCategory'}>
            <h3 className={'categoryName'}> {category.name} </h3>
          </div> 
        </Link>
      ))}
    </div>
  )
}


