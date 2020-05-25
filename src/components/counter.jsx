import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        // using map() method to render
        tags: ['tag1', 'tag2', 'tag3']
    };

    render() {
        // let classes = this.getBadgeClasses();
        return (
            // we can directly write this.getBadgeClasses() 
            // to use the method without defining again
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
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