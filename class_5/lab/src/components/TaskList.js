import React, { Component, Fragment } from 'react';
import TaskItem from './TaskItem';

export default class TaskList extends Component{
	render(){
		return(
			<Fragment>
				<ul>
					<TaskItem />
				</ul>
			</Fragment>
		);
	}
}