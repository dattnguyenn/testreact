import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Product from "./components/Product";
import Edit from "./components/Edit";
import Home from "./components/Home";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* A <Switch> looks through its children <Routers> and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/product">
            <Product/>
          </Route>
          <Route path="/edit">
            <Edit />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
