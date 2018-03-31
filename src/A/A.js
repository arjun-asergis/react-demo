import React, { Component } from 'react';

import B from '../B/B';
import C from '../C/C';
import D from '../D/D';

//import './Gallery.css';

//import './App.css';
// const dataD="";

const numbers = [1, 2, 3, 4, 5];    

class A extends Component {
    constructor(props) {
        super();
        this.state = {
            show : 'Himanshu',
            fieldVal:""
        };
    }
    changeShow= (show)=> {
        this.setState({            
            show: show,
        });
    }

    childData = (val) => {
        this.setState({fieldVal: val})
        //console.log( this.state.dataNew)
       
    }
    render() {
       

        return (
            <div>
                {this.props.dataNew}
              
                <B show={this.state.show}/>
                <C handleChangeShow={this.changeShow} show={this.state.show}/>

                 {this.props.childData}
                <D parentData={numbers} childData={this.childData}/>
                <p> {this.childData.fieldVal} </p>
               
                
            </div>
        )
    }
}

export default A;
