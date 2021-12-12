import React, { useEffect, useContext, useState } from 'react';
import { MainContext } from '../../context';
import { Redirect } from 'react-router-dom';


export default function AddProductPage() {

  const [addItemData, setAddItemData] = useState({
    name: '',
    price: '',
    country: '',
    measuringUnit: '',
    measurement: '',
    nameEnglish: '',
    image: '',
    category: ''
  }); 
  
  const {product, addProduct} = useContext(MainContext);
  const {categories, getAllCategories} = useContext(MainContext);

  useEffect(() => {
    getAllCategories();
  }, []);

  const updateProductData = (e) => {
    const {name, value} = e.target;

    setAddItemData({...addItemData, [name]: value });
  };


  const addItemToDatabase = () => {
    addProduct('addOneProduct', 'POST', addItemData);


    setAddItemData({
      name: '',
      price: '',
      country: '',
      measuringUnit: '',
      measurement: '',
      nameEnglish: '',
      image: '',
      category: ''
    });


  };

  return (
    <div>
      <h2> Add Product </h2>
      <div className={'form'}>  
          <div>
            <label>Name: </label>
            <input value={addItemData.name} onChange={updateProductData} type="text" name="name"/>
          </div>
          <div>
            <label>Price: </label>
            <input value={addItemData.price} onChange={updateProductData} type="number" name="price"/>
          </div>
          <div>
            <label>Country: </label>
            <input value={addItemData.country} onChange={updateProductData} type="text" name="country"/>
          </div>
          <div>
            <label>Measuring Unit: </label>
            <input value={addItemData.measuringUnit} onChange={updateProductData} type="text" name="measuringUnit"/>
          </div>
          <div>
            <label>Measurement: </label>
            <input value={addItemData.measurement} onChange={updateProductData} type="number" name="measurement"/>
          </div>
          <div>
            <label>Name in English: </label>
            <input value={addItemData.nameEnglish} onChange={updateProductData} type="text" name="nameEnglish"/>
          </div>
          <div>
            <label>Image: </label>
            <input value={addItemData.image} onChange={updateProductData} type="text" name="image"/>
          </div>
          <div>
            <label>Category: </label>
            <select name="categories" required="required" onChange={updateProductData} type="text" name="category">
              <option value="">Выберите значение</option>
              {categories.map(category => (
                <option value={category.nameEnglish}>
                  {category.nameEnglish}
                </option>
              ))}
            </select>
      </div>
      
      
      </div>
        
      <br/>   
        <button onClick={addItemToDatabase}>Додати продукт</button>
      <br/>

      {product && <Redirect to={`/catalog/${product.productName}`} />}
    </div>
  )
}
