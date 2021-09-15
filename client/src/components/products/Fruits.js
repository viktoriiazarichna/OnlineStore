import React, {useContext, useEffect} from "react";
import {MainContext} from "../../context";
import {Link} from "react-router-dom";
import './Fruits.css'

export default function Fruits() {

  const {fruits, getAllFruits} = useContext(MainContext);

  useEffect(() => {
    getAllFruits();
  }, []);

  return (
    <div id={'fruits'}>

      {fruits.map(fruits => (
        <Link to={`/${fruits.nameEnglish}`} key={fruits._id} >
          <div className={'oneFruits'}>
            <h3 className={'fruitsName'}> {fruits.name} </h3>
          </div>
        </Link>
      ))}

    </div>
  )
}