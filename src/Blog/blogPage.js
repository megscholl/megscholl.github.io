import React, { Component } from 'react';
import floral3 from '../images/floral3.png';
import '../App.css'
import Blog from './Blog.js';
import Navigation from '../Navigation/Navigation';

class BlogPage extends Component {
    render() {
    return(
        <div className="App">
            <Navigation />
            <center>
                <header className="App-header">
                    <img src={floral3} className="App-logo" alt="logo" />
                </header>
                <br />
                <Blog />
            </center>
        </div>
    )
    }
}

export default BlogPage;