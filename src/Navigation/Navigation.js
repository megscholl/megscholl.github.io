import React, { Component } from 'react';
import { Nav, NavItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css';


class Navigation extends Component {
  render() {
    return (
      <div className="nav">
        <Nav className="navigation-inline">
          <NavItem>
            <Link to="/" className="navigation-links" alt="go home" title="go home">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/blog" alt="blog page" title="blog page" className="navigation-links">Blog</Link>
          </NavItem>
          <NavItem>
            <Link to="/contact" alt="blog page" title="blog page" className="navigation-links">Contact</Link>
          </NavItem>
          <NavItem>
              <img src="https://hitwebcounter.com/counter/counter.php?page=7231526&style=0007&nbdigits=3&type=page&initCount=0" title="User Stats" Alt="PHP Hits Count"   border="0" />                                          
          </NavItem>
        </Nav>
      </div>
    )
  }
}

export default Navigation;