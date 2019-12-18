import React, { Component } from "react";
import Table from "./Table";

class ShowProduct extends Component {
  render() {
    return (
      <div>
        <h2>Product</h2>
        <Table data={this.props.datatable} />
      </div>
    );
  }
}

export default ShowProduct;
