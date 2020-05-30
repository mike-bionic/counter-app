import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
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
    // we could say this.state.counters.length
    return (
      <React.Fragment>
        <NavBar 
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>  
    );
  }
}

export default App;