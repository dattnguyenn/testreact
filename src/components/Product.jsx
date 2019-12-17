import React, { useState, useEffect, Component } from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import EditProduct from './EditProduct';
import AddProduct from './AddProduct';
import ShowProduct from './ShowProduct';
import Table from './Table';

class Product extends Component {
  state = { isLoaded: false, data: null };
  componentDidMount() {
    const data = [
      { id: 1, name: 'product A', price: '100k' },
      { id: 2, name: 'product A', price: '100k' },
      { id: 3, name: 'product A', price: '100k' }
    ];
    this.setState({ isLoaded: true, data: data });
  }

  render() {
    const { isLoaded, data } = this.state;
    const hello = "hello";
    if (!isLoaded) return <div>Loading...</div>;
    else {
      return (
        <div>
          <h2>Product</h2>
          <ul>
            <li>
              <Link to="/product/add">Add</Link>
            </li>
            <li>
              <Link to="/product/edit">Edit</Link>
            </li>
            <li>
              <Link to='/product/show/'>
                Show All products
              </Link>
            </li>
          </ul>
          <Switch>
            <Route path="/product/add">
              <AddProduct />
            </Route>
            <Route path="/product/edit">
              <EditProduct />
            </Route>
            <Route path="/product/show">
              <ShowProduct datatable={data}/>
            </Route>
          </Switch>
        </div>
      );
    }
  }
}

export default Product;
