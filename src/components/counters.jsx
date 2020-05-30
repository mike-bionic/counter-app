import React, { Component } from 'react';
import Counter from "./counter"

class Counters extends Component {
	state = {
		counters: [
			{ id:1, value:0 },
			{ id:2, value:4 },
			{ id:3, value:0 },
			{ id:4, value:0 }
		]
	};

	handleIncrement = counter => {
		// diffen objects "..." spread operator to clone the whole state
		const counters = [...this.state.counters];
		// find the index of current counter
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value++;
		this.setState({ counters })
	};

	// counterId is for selecting which counter to delete
	// id should be passed on counter.jsx
	handleDelete = counterId => {
		const counters = this.state.counters.filter(c => c.id !== counterId);
		this.setState({ counters });
	};


	handleReset = () => {
		const counters = this.state.counters.map(counter => {
			counter.value = 0;
			return counter;
		});
		this.setState({ counters });
	};

	render() {
		return(
			<div>
				<button
					onClick={this.handleReset}
					className="btn btn-primary btn-sm m-2">Reset</button>
				{ this.state.counters.map(counter => (
					<Counter 
						key={counter.id} 
						onDelete={this.handleDelete}
						onIncrement={this.handleIncrement}
						// passing all properties of counter in one go
						counter={counter}
					/>
				))}
			</div>
		)
	}
}

export default Counters;