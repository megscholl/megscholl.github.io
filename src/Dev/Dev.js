import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UC from '../images/under_construction.png';
import Navigation from '../Navigation/Navigation.js';
import './Dev.css'

class Dev extends Component {
    render() {
        return (
            <div className="App">
                <Navigation />
                <header className="App-header">
                    <img src={UC} className="uc-logo" alt="logo" />
                </header>
                
                <Link to="/" className="goHome">Go Home</Link>
            </div>
        )
    }
}

export default Dev;