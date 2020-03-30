import React, { Component } from 'react';
import './App.css';
import {  
  BrowserRouter as Router,
  Route, 
  Switch
 } from "react-router-dom";

// import Navigation from './Navigation/Navigation.js';
import BlogPage from './Blog/blogPage.js';
import Home from './Home/Home.js';
import Contact from './Contact/Contact';
import Dev from './Dev/Dev';
import Design from './Design/Design';
import Error from './404/404';

class App extends Component {
  render() {
   return (
      <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/blog' exact component={BlogPage}/>
            <Route path='/contact' exact component={Contact}/>
            <Route path='/dev' exact component={Dev}/>
            <Route path='/design' exact component={Design}/>
            <Route path='/' component={Error}/>
          </Switch>
      </Router>
   );
  }


}

export default App;
