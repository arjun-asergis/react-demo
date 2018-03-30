import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
//import './Gallery.css';

//import './App.css';
const API = 'https://jsonplaceholder.typicode.com/posts/1/comments';
//var findResponse;

class Link2 extends Component {

  constructor () {
    super()
    this.state = {
      allData: [],
    }
    
  }

  // componentDidMount(){
  //   this.fetchData();  onload fetch API data
  
  // }


  fetchData = () => {
    fetch(API).then((Response)=>Response.json()).then((findResponse)=> {
      //console.log(findResponse);

      this.setState({
        allData:findResponse,
      })
    })
  }

  render() {
    return (
      <div className="LinkPage">
        <h1>Link2 page</h1>
       

      <button onClick={this.fetchData}>fetch data</button>
        <Table table striped bordered condensed hover responsive>
            <thead>
              <tr>
                <th>postId</th>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>body</th>
              </tr>
            </thead>
            <tbody>
            {
              this.state.allData.map((dataD,key)=> 
              <tr>
                <td>{dataD.postId}</td>
                <td>{dataD.id}</td>
                <td>{dataD.name}</td>
                <td>{dataD.email}</td>
                <td>{dataD.body}</td>             
              </tr>,               
              )
            }
            </tbody>
          </Table>


      </div>
    );
  }
}

export default Link2;
