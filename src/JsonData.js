import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

const API = 'https://jsonplaceholder.typicode.com/posts/1/comments';

var allData;

class JsonData extends Component {
 

  constructor () {
    super()
    this.state = {
      allData: []
    }
    
  }

  componentDidMount() {
   
    allData = axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then(response => {
              console.log(response)
              this.setState({
                  allData:response.data
                })
              });
    console.log(allData);
    
  }




  render() {


    return (
      <div className="container">
      <ul>
        <li>{this.state.allData[0]!==undefined && this.state.allData[1].name} </li>
      </ul>
      </div>  

      )

  }

}

export default JsonData;
