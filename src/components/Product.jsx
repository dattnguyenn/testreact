import React, { useState, useEffect, Component } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import EditProduct from "./EditProduct";
import AddProduct from "./AddProduct";
import Table from "./Table";

const Product = () => {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Product</h2>
      <ul>
        <li>
          <Link to={`${match.url}/add`}>Add</Link>
        </li>
        <li>
          <Link to={`${match.url}/edit`}>Edit</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/add`}>
          <AddProduct />
        </Route>
        <Route path={`${match.path}/`}>
          <EditProduct />
        </Route>
      </Switch>
    </div>
  );
};

export default Product;
