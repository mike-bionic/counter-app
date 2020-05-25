import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
    };

    // //constructor method of binding data (old)
    // constructor() {
    //     // the base contructor
    //     super();
    //     // binding data
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }

    // new method of binding is arrow function =>
    // it's cleaner and simpler
    handleIncrement = () => {
        console.log('Increment clicked', this);
    }

    render() {
        return (
            // adding condition statement and new message
            // length is bool, 
            // && is looking at the first condition and the second
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment >
        );
    }
}

export default Counter;