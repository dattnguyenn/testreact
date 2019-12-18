import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Edit from "./Edit";
import AddProduct from "./AddProduct";
import ShowProduct from "./ShowProduct";

class Product extends Component {
  state = { isLoaded: false, data: null };
  componentDidMount() {
    const data = [
      { id: 1, name: "product A", price: "100k" },
      { id: 2, name: "product B", price: "200k" },
      { id: 3, name: "product C", price: "300k" },
      { id: 4, name: "product D", price: "400k" }
    ];
    this.setState({ isLoaded: true, data: data });
  }

  render() {
    const { isLoaded, data } = this.state;
    if (!isLoaded) return <div>Loading...</div>;
    else {
      return (
        <div>
          <Switch>
            <Route path="/product/add">
              <AddProduct />
            </Route>
            <Route path="/product/edit/:id" component={Edit}></Route>
            <Route path="/product/">
              <ShowProduct datatable={data} />
            </Route>
          </Switch>
        </div>
      );
    }
  }
}

export default Product;
