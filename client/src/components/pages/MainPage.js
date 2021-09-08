import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './MainPage.css';

import { Account } from '../account';
import { Header, Footer } from '../header-footer';
import { Categories } from '../products';
import { Payment, Delivery, Contacts, Rules } from "../pages";

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
                      <Route path={'/'} exact> <Categories /> </Route>
                      <Route path={'/payment'}> <Payment/> </Route>
                      <Route path={'/delivery'}> <Delivery/> </Route>
                      <Route path={'/contacts'}> <Contacts/> </Route>
                      <Route path={'/rules'}> <Rules/> </Route>

                  </Switch>
              </main>
              <Footer />

          </Router>

      </div>
  )
}
