import React, { Component } from 'react';
import './App.css';
import Moon from './components/Moon';
import Button from './components/Button';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
  }

  handleClick = (event) =>{
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const {open} = this.state;
    return (
      <div className="App">
        <h1>Hello</h1>

      <Button toggleClick={this.handleClick} open={this.state.open} /> {/*Puedo pasar funciones por medio de props*/}


        {/*<button className={open ? "is_visible" : ""} onClick={this.handleClick}>
                  {open ? "Close" : "Open"}
                </button>*/}
        {open && <Moon />}
      </div>
    );
  }
}

export default App;
