import React, { useState, useEffect } from 'react';
import './Menu.css';

import { httpRequest } from '../../helpers';

export default function Menu(props) {
  const {isVisible} = props;
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
    <nav >
      <ul className={`menu ${isVisible ? 'active' : ''}`} >
        {categories.map(category => <li className={'category'} key={category._id}> {category.name} </li> )}
      </ul>
    </nav>
  )
}
