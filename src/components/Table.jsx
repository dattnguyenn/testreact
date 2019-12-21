import React from 'react';
import { Button, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

const Example = (props) => (
  <>
    <Link to="/product/add">
      <Button color="danger" size="sm" style={{ height: 30, width: 70, textAlign: 'center' }}>
        <p>Add</p>
      </Button>
    </Link>
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
        </tr>
      </thead>
      <tbody>
        {props.data.list.map((item, i) => {
          const editpath = `/product/edit/${item.prod_id}`;
          return (
            // eslint-disable-next-line react/no-array-index-key
            <tr key={i}>
              <td>
                <div>
                  <Link to={editpath}>{item.prod_id} </Link>
                </div>
              </td>
              <td>{item.prod_name}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  </>
);

export default Example;
