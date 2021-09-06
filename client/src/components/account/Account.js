import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Login, Registration } from '.';

export default function Account() {
  return (
    <Router>
      <Switch>
        <Route path="/login"> <Login /> </Route>
        <Route path="/registration"> <Registration /> </Route>
      </Switch>

      <Link to="/login"></Link>
      <br />
      <Link to="/registration">Зареєструватись</Link>
    </Router>
  )
}
