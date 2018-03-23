import React, { Component } from 'react';

import './App.css';

import JsonData from './JsonData.js';
import Navigation from './Navigation.js';
import Tabbing from './Tabcomponent.js';




class App extends Component {


render() {
    return (
      <div className="App">

        <Navigation /> {/*routing call*/}  
          
      </div>
    );
  }
}

export default App;
