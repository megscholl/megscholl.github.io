import React, { Component } from 'react';
import floral3 from '../images/floral3.png';
import Icons from '../Icons/Icons.js';
import Title from '../Title/Title.js';
import Navigation from '../Navigation/Navigation.js';
// import FooterPage from '../Footer/Footer';
import '../App.css'

class Home extends Component {
    render() {
        return(
            <div className="App">
            <Navigation />
            <header className="App-header">
            <img src={floral3} className="App-logo" alt="logo" />

                <Title />
                <Icons />

            </header>

            {/* <FooterPage /> */}
            </div>
        )
    }
}

export default Home;