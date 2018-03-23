import React, { Component } from 'react';
import {Bootstrap, Grid, Row, Col, Table} from 'react-bootstrap';
import axios from 'axios';
import './App.css';

const API = 'https://jsonplaceholder.typicode.com/posts/1/comments';

var allData;

class Arraydata extends Component {
 

  constructor () {
    super()
    this.state = {
      allData: [],
    }
    
  }

  componentDidMount() {
   
    fetch(API).then((Response)=>Response.json()).then((findResponse)=> {
      console.log(findResponse);
      this.setState({

        allData:findResponse,

      })
    })
    
  }



render() {

  return(

    <div>    
      <div class="container"> 

      
      <Grid>
		  <Row className="show-grid">
		    <Col xs={12} md={12}>
		     <h3>Fetching json data</h3>
		    </Col>
		   
		  </Row>
	    </Grid>
	  

          <Table striped bordered condensed hover>
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
              this.state.allData.map((dynamicData)=>


              <tr>
                <td>{dynamicData.postId}</td>
                <td>{dynamicData.id}</td>
                <td>{dynamicData.name}</td>
                <td>{dynamicData.email}</td>
                <td>{dynamicData.body}</td>
             
              </tr>,

               
              )
            }
            </tbody>
          </Table>
            
    </div>  
    </div>  
  )

}

}

export default Arraydata;
