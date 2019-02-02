import React, { Component, Fragment } from 'react';

export default class TaskItem extends Component{
	render(){

		const {taskdata, isChecked} = this.props;
		let isDone = (taskdata.completed) ? 'isDone' : null

		return(
			<Fragment>
				<li className={`task_item ${isDone}`}>
					<input type="checkbox" checked={taskdata.completed} onChange={ ()=>{ isChecked(taskdata.id) } } />
					<h3 className="task_name">{taskdata.name}</h3>
				</li>
			</Fragment>
		);
	}
}