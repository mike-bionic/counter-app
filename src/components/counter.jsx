import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
    };

    handleIncrement = product => {
        console.log(product);
        //incrementing the state
        this.setState({ count: this.state.count + 1 })
    };

    render() {
        // let classes = this.getBadgeClasses();
        return (
            // we can directly write this.getBadgeClasses() 
            // to use the method without defining again
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={() => this.handleIncrement({ id: 1 })}
                    className="btn btn-secondary btn-sm">
                    Increment
                </button>
            </div>
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