import React, { Component, Fragment } from 'react';

export default class Filters extends Component{

	render(){
		return(
			<Fragment>
				<button className="sidebar_btn">All</button><br/>
				<button className="sidebar_btn">Pending</button><br/>
				<button className="sidebar_btn">Completed</button><br/>
				<button className="sidebar_btn">+New Task</button>
			</Fragment>
		);
	}
}