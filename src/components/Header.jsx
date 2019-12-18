import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                tag={RRNavLink}
                exact
                to="/home"
                activeClassName="active"
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={RRNavLink}
                exact
                to="/product"
                activeClassName="active"
              >
                Product
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={RRNavLink}
                exact
                to="/inventory"
                activeClassName="active"
              >
                Inventory
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
