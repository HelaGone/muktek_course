import React, { Component, Fragment } from 'react';
import TaskList from './TaskList';

export default class ContentList extends Component{
	
	render(){
		const {date, methods, tasks, newTask, emptyField, isDouble} = this.props
		let hideShow = (newTask) ? 'show_form': 'hide_form';
		return(
			<Fragment>
				<div className="main_content sides">
					<form onSubmit={methods.formSubmit} className={hideShow}>
						<input name="mynewtask" type="text" /> 
						<button type="submit" onClick={methods.btnClick}>Save</button>
					</form>
					{
						emptyField && <p className="warn" >Una tarea vacía no tiene sentido</p>
					}
					<h1>TODAY</h1>
					{
						isDouble && <p>Tarea repetida</p>
					}
					<p>{date}</p>
					<TaskList taskItem={tasks} isChecked={methods.checked} />
				</div>
			</Fragment>
		);
	}
}