import React, { Component, Fragment } from 'react';
import TaskItem from './TaskItem';

export default class TaskList extends Component{
	render(){
		const {taskItem, isChecked} = this.props;
		return(
			<Fragment>
				<ul>
				{
					 taskItem.map(task => {
					 	return <TaskItem key={task.id} taskdata={task} isChecked={isChecked} />
					 })
				}
				</ul>
			</Fragment>
		);
	}
}