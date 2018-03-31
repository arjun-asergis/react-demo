import React, { Component } from 'react';
import './Contact.css';
//import './App.css';


class Contact extends Component {
  render() {
    return (
  
      <div className="contactPage">
      <div className="container">
    
        <h1>Contact page</h1>

        <input type="text" name="multi" placeholder="number"/>
        <button onClick="{this.sendData}"> submit  </button>
    </div>
   </div>
    
    );
  }
}

export default Contact;
