import React, { Component } from 'react';
import '../css/App.css';
import results from '../data/file.json';
import Search from './Search.js';
import ItemList from './Item_list';

class App extends Component {
  render() {
    // console.log(results);
    return (
      <React.Fragment>
        <Search />
        <ItemList results={results} />
      </React.Fragment>
    );
  }
}

export default App;
