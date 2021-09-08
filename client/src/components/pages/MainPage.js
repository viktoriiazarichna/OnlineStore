import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './MainPage.css';

import { Account } from '../account';
import { Header, Footer } from '../header-footer';
import { Categories } from '../products';
import { Payment, Delivery, Contacts, Rules } from "../pages";

export default function MainPage() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <Router>
        <Header isVisible={isVisible} setIsVisible={setIsVisible} />

        <main className={isVisible ? 'transparentGrey' : ''}>
          <Switch>
            <Route path={'/login'}> <Account /> </Route>
            <Route path={'/fruits'}> Фрукти </Route>
            <Route path={'/vegetables'}> Овочі </Route>
            <Route path={'/greens'}> Зелень </Route>
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
