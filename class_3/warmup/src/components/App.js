import React, { Component } from 'react';
import '../css/App.css';
import Shots from './Shots';
import infoShots from '../data/shots';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      	<Shots data={infoShots} />
      </React.Fragment>
    );
  }
}

export default App;
