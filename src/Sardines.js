import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// const wrapper = styled.section`
// background-image: url("paper.gif");
// `

class Sardines extends Component {
  render() {
    return (
      <div>
        <h1>Sardines</h1>
        <Link to="/">Go Back </Link>
      </div>
    );
  }
}

Sardines.defaultProps = {};

Sardines.propTypes = {};

export default Sardines;
