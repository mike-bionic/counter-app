import React, { Component } from 'react';
import Counter from "./counter"

class Counters extends Component {
	render() {
		return(
			<div>
				<button
					onClick={this.props.onReset}
					className="btn btn-primary btn-sm m-2">Reset</button>
				{ this.props.counters.map(counter => (
					<Counter 
						key={counter.id}
						// bubbling the event to parent
						onDelete={this.props.onDelete}
						onIncrement={this.props.onIncrement}
						// passing all properties of counter in one go
						counter={counter}
					/>
				))}
			</div>
		)
	}
}

export default Counters;