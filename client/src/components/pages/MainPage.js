import React, { useContext } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './MainPage.css';

import { RouterLoginRegistr } from '../account';
import { Header, Footer } from '../header-footer';
import { Categories, Fruits } from '../products';
import { Payment, Delivery, Contacts, Rules } from "../pages";
import { MainContext } from '../../context';

export default function MainPage() {
  const { categories } = useContext(MainContext);

  return (
    <div>
      <Router>
        <Header />

        <main>
          <Switch>
            <Route path={'/login'}> <RouterLoginRegistr /> </Route>
            {categories.map(category => (
              <Route path={`/${category.nameEnglish}`} key={category._id}> {category.name} </Route>
            ))}
            <Route path={'/payment'}> <Payment/> </Route>
            <Route path={'/delivery'}> <Delivery/> </Route>
            <Route path={'/contacts'}> <Contacts/> </Route>
            <Route path={'/rules'}> <Rules/> </Route>
            <Route path={'/fruits'}> <Fruits/> </Route>
            <Route path={'/'}> <Categories /> </Route>
          </Switch>
        </main>
        
        <Footer />
      </Router>
    </div>
  )
}
