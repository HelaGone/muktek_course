import React, { Component } from 'react';
import '../css/App.css';
import results from '../data/file.json';
import ItemList from './Item_list';
import Download from './Download.js';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			results: results.results,
			filtered: results.results,
			fsize: 0
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
        <input type="search" name="search_todos" placeholder="buscar" onChange={this.searchBy} />
        <div className="main_container">
        	<ItemList results={this.state.filtered}/>
        	<div className="inner_elem sidebar">
        		<h2>Compress</h2>
        		<Download fsize={this.state.fsize} />
        	</div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
