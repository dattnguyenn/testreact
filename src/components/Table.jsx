import React, { Fragment } from "react";
import { Button, Table } from "reactstrap";
import { Link } from "react-router-dom";

const Example = props => {
  return (
    <Fragment>
      <Link to="/product/add">
        <Button
          color="danger"
          size="sm"
          style={{ height: 30, width: 70, textAlign: "center" }}
        >
          <p>Add</p>
        </Button>
      </Link>
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
            const editpath = "/product/edit/" + item.id;
            return (
              <tr key={i}>
                <td>
                  <div>
                    <Link to={editpath}>{item.id} </Link>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default Example;
