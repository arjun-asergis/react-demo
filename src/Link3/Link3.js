import React, { Component } from 'react';

//import './Gallery.css';

//import './App.css';


class Link3 extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.incrementCounter = this.updateCounter.bind(this, 2);
    this.decrementCounter = this.updateCounter.bind(this, -1);
}

render() {
    return (
        <div>
            <div>{this.state.count}</div>
            <input type='button' value='+' onClick={this.incrementCounter} />
            <input type='button' value='-' onClick={this.decrementCounter} />
        </div>
    );
}

updateCounter(count) {
    this.setState({count: this.state.count + count});
}
}

export default Link3;
