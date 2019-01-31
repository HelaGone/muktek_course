import React, {Component} from 'react';

export default class Search extends Component{

	handleOnChange = event =>{
		const {value} = event.target;
		this.props.onSearch(value)
	}

	render(){
		return (<input type="search" placeholder="buscar..." onChange={this.handleOnChange} />);
	}
}