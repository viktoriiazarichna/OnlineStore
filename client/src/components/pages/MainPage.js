import React, { useState, useContext } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './MainPage.css';

import { Account } from '../account';
import { Header, Footer } from '../header-footer';
import { Categories } from '../products';
import { Payment, Delivery, Contacts, Rules } from "../pages";
import { MainContext } from '../context';

export default function MainPage() {
  const [isVisible, setIsVisible] = useState(false);
  const { categories } = useContext(MainContext);

  return (
    <div>
      <Router>
        <Header isVisible={isVisible} setIsVisible={setIsVisible} />

        <main className={isVisible ? 'transparentGrey' : ''}>
          <Switch>
            <Route path={'/login'}> <Account /> </Route>
            {categories.map(category => (
              <Route path={`/${category.nameEnglish}`} key={category._id}> {category.name} </Route>
            ))}
            <Route path={'/payment'}> <Payment/> </Route>
            <Route path={'/delivery'}> <Delivery/> </Route>
            <Route path={'/contacts'}> <Contacts/> </Route>
            <Route path={'/rules'}> <Rules/> </Route>
            <Route path={'/'}> <Categories /> </Route>
          </Switch>
        </main>
        
        <Footer isVisible={isVisible} />
      </Router>
    </div>
  )
}
