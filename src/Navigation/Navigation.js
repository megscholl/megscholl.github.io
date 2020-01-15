import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css';

const Navigation = (props) => {
  return (
    <div className="nav">
      <Nav className="navigation-inline">
          <NavItem >
            <NavLink className="navigation-links" href="#">Link</NavLink>
          </NavItem>
          <NavItem >
            <NavLink className="navigation-links" href="#">Link</NavLink>
          </NavItem>
          <NavItem >
            <NavLink className="navigation-links" href="#">Link</NavLink>
          </NavItem>
      </Nav>
    </div>
  );
}

export default Navigation;