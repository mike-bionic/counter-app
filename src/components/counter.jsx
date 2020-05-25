import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
    };

    handleIncrement = () => {
        //incrementing the state
        this.setState({ count: this.state.count + 1 })
    };

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