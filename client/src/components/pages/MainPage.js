import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Account } from '../account';
import { Header, Footer } from '../header-footer';
import { Categories } from '../products';

export default function MainPage() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path={'/login'}> <Account /> </Route>
          <Route path={'/'}> <Categories /> </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}
