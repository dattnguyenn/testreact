import React, { Component } from 'react';
import Table from './Table';

class ShowProduct extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { datable } = this.props;

    return (
      <div>
        <h2>Product</h2>
        <Table data={datable} />
      </div>
    );
  }
}

export default ShowProduct;
