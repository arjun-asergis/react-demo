import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link  } from 'react-router-dom';
import Home from './Home.js';
import Contact from './Contact.js';
import About from './About.js';
// import './About.css';

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <Router>
        <div>

        	<ul>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/Contact'}>Contact</Link></li>
              <li><Link to={'/About'}>About</Link></li>
           </ul>

          <Switch>             
            <Route exact path="/" component={Home} />
            <Route path="/Contact" component={Contact} />
            <Route path="/About" component={About} />         
          </Switch>

          </div>
        </Router>
      </div>
    );
  }
}

export default Navigation;
