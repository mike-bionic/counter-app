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
        // let classes = this.getBadgeClasses();
        return (
            // we can directly write this.getBadgeClasses() 
            // to use the method without defining again
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment >
        );
    }
    // this method was inside render() before we extracted it
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        // defining and dynamic style change
        // if count = 0 -> warning else -> primary 
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;