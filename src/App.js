import React from 'react';
import './App.css';
import floral3 from './images/floral3.png';
// import Navigation from './Navigation/Navigation.js';
import Icons from './Icons/Icons.js';
import Title from './Title/Title.js';

function App() {
  return (
    <div>
      {/* <Navigation /> */}
      <div className="App">
        <header className="App-header">
        <img src={floral3} className="App-logo" alt="logo" />
        {/* <h1>hi i'm meg scholl, and i'm a web developer</h1> */}
        <Title />

        <Icons />

        </header>
      </div>
    </div>
  );
}

export default App;
