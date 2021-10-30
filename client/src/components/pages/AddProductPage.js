import React from 'react';


export default function AddProductPage() {
  return (
    <div>
      <h2> Add Product </h2>
      <div className={'form'}>  
          <div>
            <label>Name: </label>
            <input type="text" name="name"/>
          </div>
          <div>
            <label>Price: </label>
            <input type="number" name="price"/>
          </div>
          <div>
            <label>Country: </label>
            <input type="text" name="country"/>
          </div>
          <div>
            <label>Measuring Unit: </label>
            <input type="text" name="measuringUnit"/>
          </div>
          <div>
            <label>Measurement: </label>
            <input type="number" name="measurement"/>
          </div>
          <div>
            <label>Name in English: </label>
            <input type="text" name="nameEnglish"/>
          </div>
          <div>
            <label>Image: </label>
            <input type="text" name="image"/>
          </div>
          <div>
            <label>Category Name: </label>
            <input type="text" name="categoryName"/>  
      </div>
      
      
      </div>
        
            
      <button type="submit"> submit </button>
      
    </div>
  )
}
