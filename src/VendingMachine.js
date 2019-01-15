import React, { Component } from 'react';
// import Sardines from './Sardines';
// import Chips from './Chips';
// import Soda from './Soda';
import { Link, NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import VendingMachinePic from './VendingMachine.png';
import { Button } from 'reactstrap';

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  margin: 10 2em;
  padding: 0.25em 1em;
`;

const Wrapper = styled.div`
background-image: url('${VendingMachinePic}');
background-position: center;
background-size: cover;
height: 100vh;
`;
//background-size: auto;
//background-image: url('./VendingMachine.png');
//background: url('https://www.evending.com/wp-content/uploads/2017/03/23-Select-Snack-Vending-Machine-lftqtr.jpg');

class VendingMachine extends Component {
  render() {
    // const divStyle = {
    //   color: 'blue',
    //   backgroundImage: 'url(${VendingMachinePic})'
    // };
    return (
      <Wrapper>
        <h1>Hello, I am a Vending Machine, What do you want?</h1>
        <div>
          <NavLink to="/soda">
            <Button color="danger">Danger</Button>
            <StyledButton>Soda</StyledButton>
          </NavLink>
        </div>
        <div>
          <Link to="/chips">
            <StyledButton>Chips</StyledButton>
          </Link>
        </div>
        <div>
          <Link to="/sardines">
            <StyledButton>Sardines</StyledButton>
          </Link>
        </div>
      </Wrapper>
    );
  }
}

VendingMachine.defaultProps = {};

VendingMachine.propTypes = {};

export default VendingMachine;
