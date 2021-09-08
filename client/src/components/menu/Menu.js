import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

import { MainContext } from '../context';

export default function Menu(props) {
  const { isVisible } = props;
  const { categories, getAllCategories } = useContext(MainContext);

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <nav >
      <ul className={`menu ${isVisible ? 'active' : ''}`} >
        {categories.map(category => (
          <li className={'category'} key={category._id}>
            <Link to={`/${category.nameEnglish}`}> {category.name} </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
