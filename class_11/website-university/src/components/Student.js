import React, { Component, Fragment } from 'react';

export default class Student extends Component{
	render(){
		const {currentStudent, methods, match} = this.props;

		methods.fetchStudent(match.params.studentId);

		console.log(currentStudent);

		return(
			<Fragment>
				<h2>Student</h2>
			</Fragment>
		);
	}
}