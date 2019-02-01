import React, { Component, Fragment } from 'react';
import TaskList from './TaskList';

export default class ContentList extends Component{
	
	render(){
		const {date, methods, tasks} = this.props
		return(
			<Fragment>
				<div className="main_content sides">

					<form onSubmit={methods.formSubmit}>
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