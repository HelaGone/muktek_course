import React, { Component } from 'react';
import '../css/App.css';
import results from '../data/file.json';
import ItemList from './Item_list';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			results: results.results,
			filtered: results.results
		}
	}

	searchBy = (event)=>{
		console.log(event);
		let searched_task;
		const query = event.target.value.toLowerCase();

		const queried_file = this.state.results.filter((file)=>{
			return file.name.toLowerCase().includes(query);
		});

		console.log(queried_file);

		this.setState({
			filtered: queried_file
		});

	}

  render() {
    // console.log(results.results);
    return (
      <React.Fragment>
        <input type="search" name="search_todos" placeholder="buscar" onChange={this.searchBy} />
        <ItemList results={this.state.filtered} />
      </React.Fragment>
    );
  }
}

export default App;
