import React, { Component } from 'react';

class Counter extends Component {
		state = {
				// setting the falue to a count component
				// props is the method of passing attributes
				// prefix 'counter' to get the counters info
				value: this.props.counter.value,
		};

		handleIncrement = product => {
				this.setState({ value: this.state.value + 1 })
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
								<button onClick={() => this.props.onDelete(this.props.counter.id)} 
								className="btn btn-danger btn-sm m-2">Delete</button>
						</div>
				);
		}
		// this method was inside render() before we extracted it
		getBadgeClasses() {
				let classes = "badge m-2 badge-";
				classes += (this.state.value === 0) ? "warning" : "primary";
				return classes;
		}

		formatCount() {
				// defining and dynamic style change
				// if count = 0 -> warning else -> primary 
				const { value } = this.state;
				return value === 0 ? 'Zero' : value;
		}
}

export default Counter;