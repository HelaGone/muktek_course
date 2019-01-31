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
		const query = event.target.value.toLowerCase();
		const queried_file = this.state.results.filter((file)=>{
			return file.name.toLowerCase().includes(query);
		});

		this.setState({
			filtered: queried_file
		});

	}

  render() {
    return (
      <React.Fragment>
      	<div className="main_container">
	      	<div className="sides" >
	        	<input type="search" name="search_todos" placeholder="buscar" onChange={this.searchBy} />
	        	<ItemList results={this.state.filtered} />
	        </div>
	        <div className="sides sidebar" >
	        	<h2>Compress</h2>
	        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
