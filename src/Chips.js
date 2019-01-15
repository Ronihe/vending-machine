import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Chips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.addAChip = this.addAChip.bind(this);
  }

  addAChip() {
    this.setState(st => {
      return st.counter++;
    });
  }

  render() {
    return (
      <div className="Chips">
        <h2>Chips</h2>
        <Link to="/">Go back</Link>
        <div>{this.state.counter}</div>
        <button onClick={this.addAChip}>Num num</button>
      </div>
    );
  }
}

Chips.defaultProps = {};

Chips.propTypes = {};

export default Chips;
