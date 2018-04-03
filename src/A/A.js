import React, { Component } from 'react';
import B from '../B/B';
//import C from '../C/C';
import D from '../D/D'



//import './Gallery.css';

//import './App.css';
// const dataD="";

const numbers = [1, 2, 3, 4, 5];   

const numbers2 = [12,356,25,19,25];   

const numbers3 = ["arjun singh","areya","abahy","alok"];   


class A extends Component {
    constructor(props) {
        super();
        this.state = {
            show : '',
            val:"",
            doubled:""
        };
    }


    getData = (val) => {
      const val1 = val.map( (val) => val * 2 );        
      const val2 = val.map((val) => val * 3);
        // do not forget to bind getData in constructor
        this.setState({
            val:val,
            doubled:"",
            val3:val1,
            val4:val2         
          
        })
    }


    render() {       

        return (
            <div>
                {/* {this.props.dataNew}
              
                <B show={this.state.show}/>
                <C handleChangeShow={this.changeShow} show={this.state.show}/> */}

             
                <D parentData={numbers2}  sendData={this.getData}/>

                <p>{this.state.val}</p>                     
                <p> {this.state.val3}</p>
                <p> {this.state.val4} </p>            

                <B parentData={numbers} Pdata={numbers2} stringD={numbers3} />
             
                {/* {this.renderRedirect()}
                  <button onClick={this.setRedirect()}>Redirect</button> */}
            
               
                
            </div>
        )
    }
}

export default A;
