import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Soda extends Component {
  render() {
    return (
      <div>
        <h2>Soda</h2>
        <p>OMG SUGARRRRR</p>
        <Link to="/">Go back</Link>
      </div>
    );
  }
}

Soda.defaultProps = {};

Soda.propTypes = {};

export default Soda;
