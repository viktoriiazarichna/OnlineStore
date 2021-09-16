import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './MainPage.css';

import { Account, Login, Registration } from '../account';
import { Header, Footer } from '../header-footer';
import { Categories, ProductPage, ProductsList } from '../products';
import { Payment, Delivery, Contacts, Rules } from "../pages";

export default function MainPage() {
  const [user, setUser] = useState();

  return (
    <div>
      <Router>
        <Header user={user} setUser={setUser} />

        <main>
          <Switch>
            <Route path={'/account/:id'}> <Account user={user} /> </Route>
            <Route path={'/login'}> <Login user={user} setUser={setUser} /> </Route>
            <Route path={'/registration'}> <Registration user={user} setUser={setUser} /> </Route>
            <Route path={'/payment'}> <Payment/> </Route>
            <Route path={'/delivery'}> <Delivery/> </Route>
            <Route path={'/contacts'}> <Contacts/> </Route>
            <Route path={'/rules'}> <Rules/> </Route>
            <Route path={'/:categoryName/:productName'}> <ProductPage /> </Route>
            <Route path={'/:categoryName'}> <ProductsList /> </Route>
            <Route path={'/'}> <Categories /> </Route>
          </Switch>
        </main>
        
        <Footer />
      </Router>
    </div>
  )
}
