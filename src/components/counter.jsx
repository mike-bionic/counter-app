import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        // using map() method to render
        tags: ['tag1', 'tag2', 'tag3']
    };

    renderTags() {
        // handle the empty list case
        if (this.state.tags.length === 0) return <p>No tags</p>; // or null
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    render() {
        return (
            // adding condition statement and new message
            // length is bool, 
            // && is looking at the first condition and the second
            <React.Fragment>
                {this.state.tags.length === 0 && "Please create a new tag"}
                {this.renderTags()}
            </React.Fragment >
        );
    }
}

export default Counter;