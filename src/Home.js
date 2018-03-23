import React, { Component } from 'react';

import {Bootstrap, Grid, Row, Col, Table} from 'react-bootstrap';
import Arraydata from './Arraydata.js';
import Header from './Header.js';
// import './About.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Home page</h1>

        <Arraydata /> {/*fetching json data*/}

            <Header />  {/*simple component call*/}
      </div>
    );
  }
}

export default Home;
