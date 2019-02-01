import React, { Component, Fragment } from 'react';
import TaskList from './TaskList';

export default class ContentList extends Component{
	constructor(props){
		super(props);
		this.state= {
			date: ""
		}
	}

	getDate(){
		const date = new Date().toLocaleString();
		this.setState({
			date: date
		});
	}

	componentDidMount(){
		this.getDate();
	}
	
	render(){

		return(
			<Fragment>
				<div className="main_content sides">
					<h1>TODAY</h1>
					<p>{this.state.date}</p>
					<TaskList />
				</div>
			</Fragment>
		);
	}
}