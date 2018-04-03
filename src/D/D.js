import React, { Component } from 'react';



//import './Gallery.css';

//import './App.css';

const childDataN = [1,2,3,4,5,6,7,8,9,10];

class D extends Component {
    constructor(props) {
        super();
        this.state = {
            show : '',
            fieldVal:''
        };
    }

    demoMethod = () => {
    this.props.sendData(childDataN)
    //console.log(childDataN)
    }

    showparentData = () => {
        this.setState({show: this.props.parentData})
        console.log( this.state.show)
    }



    render() {       

        return (
            <div>{this.props.showparentData}
                <button onClick={this.showparentData}> show parent Data to child component  </button>
                <p>{this.state.show}</p>
            

            {this.props.demoMethod}
            <button onClick={this.demoMethod}>show child data to parent component</button>
            
           
             
               
               
            </div>
        )
    }
}

export default D;
