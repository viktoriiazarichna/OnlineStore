import React, { useEffect, useContext, useState } from 'react';
import { MainContext } from '../../context';
import { URL } from '../../constants/constants';

export default function AddProductPage() {

  const [addItemData, setAddItemData] = useState({
    name: '',
    price: '',
    country: '',
    measuringUnit: '',
    measurement: '',
    nameEnglish: '',
    image: '',
    category: '',
    categoryName: ''
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
  const setcategoryName = (e) => {
    const {value} = e.target;
    const cname = categories.find(category => category._id === value).nameEnglish;
    setAddItemData({...addItemData, categoryName: cname,
      category: value});
  }
  const fileUploadHandler = (e) => {
    setAddItemData({...addItemData, ['image']: "images/products/" + e.target.files[0].name });
  }


  const addItemToDatabase = () => {
    try {
      addProduct('addOneProduct', 'POST', addItemData);
    } catch (ex) {
      console.log(ex);
    }

    setAddItemData({
      name: '',
      price: '',
      country: '',
      measuringUnit: '',
      measurement: '',
      nameEnglish: '',
      image: '',
      category: '',
      categoryName: ''
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
            <label>Category: </label>
            <select required="required" onChange={setcategoryName} type="text" name="category">
              <option value="">Выберите значение</option>
              {categories.map(category => (
                <option value={category._id} >
                  {category.nameEnglish}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Category name: </label>
            <input value={(categories.find(category => category._id === addItemData.category)) ?
              categories.find(category => category._id === addItemData.category).nameEnglish: ''} onChange={updateProductData} type="text" name="categoryName"/>
          </div>
          <div>
            <form action="http://localhost:5000/catalog/uploadFile" method="POST" encType="multipart/form-data" >
              <label>Image: </label>
              <input onChange={(event)=> fileUploadHandler(event)} type="file" name="image"/>
              <div></div>
              <br/>   
                <button type="submit" onClick={addItemToDatabase}>Додати продукт</button>
              <br/>
            </form>
          </div>
        </div>
    </div>
  )
}
