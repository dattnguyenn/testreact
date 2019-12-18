import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

class ProductForm extends Component {
  state = {};
  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="productName" sm={2}>
            * Name
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="name"
              id="productName"
              placeholder="Enter the product name..."
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="productSelect" sm={2}>
            * Select Provider
          </Label>
          <Col sm={10}>
            <Input type="select" name="select" id="productSelect">
              <option>Provider 1</option>
              <option>Provider 2</option>
              <option>Provider 3</option>
              <option>Provider 4</option>
              <option>Provider 5</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="productPrice" sm={2}>
            * Price
          </Label>
          <Col sm={10}>
            <Input
              type="number"
              name="price"
              id="productPrice"
              step={1000}
              min={0}
              max={10000}
              placeholder="Enter the product price..."
            />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default ProductForm;
