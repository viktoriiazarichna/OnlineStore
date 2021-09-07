import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './MainPage.css';

import { Account } from '../account';
import { Header, Footer } from '../header-footer';
import { Categories } from '../products';

export default function MainPage() {
  return (
    <div>
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path={'/login'}> <Account /> </Route>
            <Route path={'/fruits'}> Фрукти </Route>
            <Route path={'/vegetables'}> Овочі </Route>
            <Route path={'/greens'}> Зелень </Route>
            <Route path={'/'}> <Categories /> </Route>
          </Switch>
        </main>
      </Router>
      <Footer />
    </div>
  )
}
