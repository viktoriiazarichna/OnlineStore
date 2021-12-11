import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './pages.css';

import { Account, Login, Registration } from '../account';
import { Header, Footer } from '../header-footer';
import { Categories, ProductPage, ProductsList } from '../products';
import { Payment, Delivery, Contacts, Rules, AddProductPage, Cart, Order } from "../pages";


export default function MainPage() {

  return (
    <div>
      <Router>
        <Header />

        <main>
          <Switch>
            <Route path={'/account/:id'}> <Account /> </Route>
            <Route path={'/login'}> <Login /> </Route>
            <Route path={'/registration'}> <Registration /> </Route>
            <Route path={'/cart'}> <Cart/> </Route>  
            <Route path={'/payment'}> <Payment/> </Route>
            <Route path={'/delivery'}> <Delivery/> </Route>
            <Route path={'/contacts'}> <Contacts/> </Route>
            <Route path={'/rules'}> <Rules/> </Route>
            <Route path={'/order'}> <Order/> </Route> 
            <Route path={'/addProductPage'}> <AddProductPage /> </Route>
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
