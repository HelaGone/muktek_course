import React, { Component, Fragment } from 'react';
import '../css/App.css';
import Sidebar from './Sidebar';
import ContentList from './ContentList';
 
class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="main_wrapper">
          <Sidebar/>
          <ContentList/>
        </div>
      </Fragment>
    );
  }
}

export default App;
