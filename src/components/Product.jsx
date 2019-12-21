import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Edit from './Edit';
import AddProduct from './AddProduct';
import ShowProduct from './ShowProduct';

class Product extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = { isLoaded: false, items: [] };

  componentDidMount() {
    axios.get('/api/products').then((res) => {
      this.setState({ isLoaded: true, items: res.data });
    });
  }

  render() {
    const { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Switch>
          <Route path="/product/add">
            <AddProduct />
          </Route>
          <Route path="/product/edit/:id" component={Edit} />
          <Route path="/product/">
            <ShowProduct datable={items} />
          </Route>
        </Switch>
      </div>
    );
  }
}
export default Product;
