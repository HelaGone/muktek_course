import React, { Component } from 'react';
import '../css/App.css';
import data from '../data/people';
import People from './People';



class App extends Component {
	constructor(){
		super();
		this.state = {
			people: data,
			filtered: data
		}
	}

	filterby(type){
		let filtered;
		if(type === 'all'){
			filtered = this.state.people;
		}else{
			filtered = this.state.people.filter(p => p.type === type)
		}

		this.setState({
			filtered
		});
	}

	searchByName = ( e )=>{
		const query = e.target.value.toLowerCase();

		const queried_people = this.state.people.filter((p)=>{
			return p.name.toLowerCase().includes(query);
		});

		this.setState({
			filtered: queried_people
		});

	};

  render() {

  	const {name} = this.state;
  	// console.log(this.state.filtered);
    return (
      <React.Fragment>
      	<button onClick={ ()=>this.filterby("all") }>All</button>
      	<button onClick={()=>this.filterby("model")}>Only models</button>
      	<button onClick={()=>this.filterby("photographer")}>Only photographers</button>

      	<input onChange={this.searchByName} type="search" />
      	<People data={this.state.filtered}/>
      </React.Fragment>
    );
  }
}

export default App;
