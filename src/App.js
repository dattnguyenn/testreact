import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from './components/Header';
import Product from './components/Product';
import Home from './components/Home';
import Inventory from './components/Inventory';

export default function App() {
  return (
    <Container>
      <Router>
        <div>
          <Header />
          {/* A <Switch> looks through its children <Routers> and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/inventory">
              <Inventory />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            {/* <Route path="/product/edit/:id">
            <Edit />
          </Route> */}
          </Switch>
        </div>
      </Router>
    </Container>
  );
}
