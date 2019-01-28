import React, {Component} from 'react';

export default class Search extends Component{
	constructor(props){
		super(props);
		this.state={
			query: '' 
		}
	}


	handleOnChange = event => {
		const target = event.target;
		const value = target.value

		// console.log(value);

		this.setState({
			query: value
		});

	}


	render(){
		return (
			<input type="search" name="search_todos" value={this.state.query} placeholder="buscar" onChange={this.handleOnChange} />
		);
	}
}