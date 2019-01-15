import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VendingMachine from './VendingMachine.js';
import Soda from './Soda.js';
import Chips from './Chips.js';
import Sardines from './Sardines.js';

import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <VendingMachine />} />
          <Route exact path="/soda" render={() => <Soda />} />
          <Route exact path="/chips" render={() => <Chips />} />
          <Route exact path="/sardines" render={() => <Sardines />} />
        </Switch>
      </div>
    );
  }
}

export default App;
