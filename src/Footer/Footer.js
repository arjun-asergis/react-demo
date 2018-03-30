import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Footer.css';

//import './App.css';


class Footer extends Component {
  render() {
    return (
      <div className="footer">
        	<ul>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/Contact'}>Contact</Link></li>
              <li><Link to={'/About'}>About</Link></li>
              <li><Link to={'/Gallery'}>gallery</Link></li>
           </ul>
      </div>
    );
  }
}

export default Footer;
