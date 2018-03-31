import React, { Component } from 'react';

//import './Gallery.css';

//import './App.css';
class C extends Component {
    handleChange = ({target})=> {
        this.props.handleChangeShow(target.value)
    }
    render() {
        return (
           <select onChange={this.handleChange}>
                <option value="himanshu">himanshu</option>
                <option value="Arjun">Arjun</option>
           </select>
        )
    }
}


export default C;
