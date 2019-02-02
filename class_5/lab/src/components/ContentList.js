import React, { Component, Fragment } from 'react';
import TaskList from './TaskList';

export default class ContentList extends Component{
	
	render(){
		const {date, methods, tasks, newTask} = this.props
		let hideShow;
		if(newTask){
			hideShow = 'show_form';
		}else{
			hideShow = 'hide_form';
		}

		return(
			<Fragment>
				<div className="main_content sides">
					<form onSubmit={methods.formSubmit} className={hideShow}>
						<input name="mynewtask" type="text" /> 
						<button type="submit" onClick={methods.btnClick}>Save</button>
					</form>

					<h1>TODAY</h1>
					<p>{date}</p>
					<TaskList taskItem={tasks} isChecked={methods.checked} />
				</div>
			</Fragment>
		);
	}
}