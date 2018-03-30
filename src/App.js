import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Header from'./Header/Header.js';
import Footer from'./Footer/Footer.js';

import Contact from './Contact/Contact';
import About from './About/About'
import Gallery from './Gallery/Gallery'

import Link1 from './Link1/Link1';
import Link2 from './Link2/Link2';
import Link3 from './Link3/Link3';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />

        <Switch>             
          <Route path="/Contact" component={Contact} />
          <Route path="/About" component={About} />      
          <Route path="/Gallery" component={Gallery} />  
          <Route path="/Link1" component={Link1} />  
          <Route path="/Link2" component={Link2} />  
          <Route path="/Link3" component={Link3} />  
        </Switch>
        
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
