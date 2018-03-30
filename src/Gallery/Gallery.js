import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Link1 from '../Link1/Link1';
import Link2 from '../Link2/Link2';
import Link3 from '../Link3/Link3';


class Gallery extends Component {
  render() {
    return (
      <div className="galleryPage">
        <h1>Gallery page</h1>
        <ul>
          <li> <Link to={'Link1'}>Link1</Link>  </li>
          <li> <Link to={'Link2'}>Link2</Link>  </li>
          <li> <Link to={'Link3'}>Link3</Link>  </li>
        </ul>

        <Router>
      <div className="submenu"> 

        <Switch>             
          <Route path="/link1" component={Link1} />
          <Route path="/link2" component={Link2} />      
          <Route path="/link3" component={Link3} /> 
        </Switch>
      </div>
      </Router>
      </div>
    );
  }
}

export default Gallery;
