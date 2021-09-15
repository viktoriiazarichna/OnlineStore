import React, {useContext, useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import './ProductsList.css';

import { MainContext } from "../../context";

export default function ProductsList() {
  const {allProducts, getAllProductsOfOneCategory} = useContext(MainContext);
  const {nameEnglish} = useParams();
  const [pageName, setPageName] = useState(null);

  const changePageName = () => {
    if (nameEnglish === 'fruits') {
      setPageName('Фрукти');
    } else if (nameEnglish === 'vegetables') {
      setPageName('Овочі');
    } else if (nameEnglish === 'greens') {
      setPageName('Зелень')
    }
  };

  useEffect(() => {
    changePageName();
  }, [nameEnglish]);

  useEffect(() => {
    getAllProductsOfOneCategory(nameEnglish);
  }, []);

  return (
    <div>
      <h2>{pageName}</h2>
    </div>
  )
}