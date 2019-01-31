import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import UserList from './components/UserList';
import users from './data/users';

class App extends Component {

  state = {
    users,
    filtered: ''
  }

  onFilter = query=>{
    const {users} = this.state;

    const filtered = users.filter(user=>{
      return user.includes(query);
    });

    console.log(filtered);

  }

  render() {
    return (
      <div className="App">
        <h1>Search Engine Example</h1>
        <Search onSearch={this.onFilter} />
        <UserList data={this.state} />
      </div>
    );
  }
}

export default App;
