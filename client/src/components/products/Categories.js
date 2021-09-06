import React, {useEffect, useState} from 'react';

import { httpRequest } from '../../helpers/http.helper';

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
    <div>
      <h1> Categories Page </h1>
      {categories.map(category => (
        <div key={category._id}> {category.name} </div> 
      ))}
    </div>
  )
}



