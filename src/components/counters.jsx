import React, { Component } from 'react';
import Counter from "./counter"

class Counters extends Component {
	render() {
		// destructuring and making the code cleaner
		const { onReset, counters, onDelete, onIncrement } = this.props;
		return(
			<div>
				<button
					onClick={onReset}
					className="btn btn-primary btn-sm m-2">Reset</button>
				{ counters.map(counter => (
					<Counter 
						key={counter.id}
						// bubbling the event to parent
						onDelete={onDelete}
						onIncrement={onIncrement}
						// passing all properties of counter in one go
						counter={counter}
					/>
				))}
			</div>
		)
	}
}

export default Counters;