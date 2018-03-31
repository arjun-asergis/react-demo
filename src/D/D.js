import React, { Component } from 'react';



//import './Gallery.css';

//import './App.css';

const childDataN = [9,8,7,6,5,4,3,2,1];

class D extends Component {
    constructor(props) {
        super();
        this.state = {
            show : '',
            fieldVal:''
        };
    }


    showChildData = (e) => {
        //console.log(e.target.value);
        e.preventDefault;
        this.setState({
             fieldVal: childDataN 
         })
       
      return this.state.fieldVal
      };

    showparentData = () => {
        this.setState({show: this.props.parentData})
        console.log( this.state.show)
    }
    render() {
       

        return (
            <div>{this.props.showparentData}
                <button onClick={this.showparentData}> show parent Data to child component  </button>
                <p>{this.state.show}</p>
            

            {this.props.showChildData}
            <button onClick={this.showChildData}>show child data to parent component</button>
            
           
             
               
               
            </div>
        )
    }
}

export default D;
