import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <ul>
          <li> <span>btn1</span> </li>
          <li> <span>btn2</span> </li>
          <li> <span>btn3</span> </li>
        </ul>  
      </div>
    );
  }
}

export default Header;
