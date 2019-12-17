import React from "react";
import { Table } from "reactstrap";

const Example = props => {
  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, i) => {
          return (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Example;
