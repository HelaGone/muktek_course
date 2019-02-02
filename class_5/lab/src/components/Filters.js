import React, { Component, Fragment } from 'react';

export default class Filters extends Component{

	render(){
		const {filterMethods} = this.props;
		return(
			<Fragment>
				<button className="sidebar_btn" onClick={()=>filterMethods.filter('all')}>All tasks</button><br/>
				<button className="sidebar_btn" onClick={()=>filterMethods.filter('pending')}>Pending</button><br/>
				<button className="sidebar_btn" onClick={()=>filterMethods.filter('completed')}>Completed</button><br/>
				<button className="sidebar_btn" onClick={filterMethods.addNewTask} >+New Task</button>
			</Fragment>
		);
	}
}