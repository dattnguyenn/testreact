import React, { Component } from "react";
import Table from './Table';

class ShowProduct extends Component {
  render() {
    return (
      <div>
          <Table data={this.props.datatable}/>
      </div>
    );
  }
}

export default ShowProduct;