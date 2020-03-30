import React, { Component } from 'react';
// import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import floral from '../images/floral404.png';
import './style404.css';
import Navigation from '../Navigation/Navigation.js';


class Error extends Component {
    render() {
        return (
            <div className="App">
                <Navigation />
                <header className="App-header">
                    <img src={floral} className="error-logo" alt="logo" />
                </header>

                <Link to="/" className="goHome">Go Home</Link>
            </div>
        )
      }
  }

export default Error;