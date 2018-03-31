import React, { Component } from 'react';
import {Link} from "react-router-dom";



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

       
      </div>
    );
  }
}

export default Gallery;
