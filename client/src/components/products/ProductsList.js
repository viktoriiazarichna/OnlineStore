import React, {useContext, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import './ProductsList.css';

import { MainContext } from "../../context";

export default function ProductsList() {

  const {allProducts, getAllProductsOfOneCategory} = useContext(MainContext);

  const {nameEnglish} = useParams();

  useEffect(() => {
    getAllProductsOfOneCategory(nameEnglish);
  }, []);

  return (
    <div>
      <h2>ProductsList</h2>
    </div>
  )
}