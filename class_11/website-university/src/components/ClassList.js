import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';

export default class ClassList extends Component{

	render(){
		const {methods, students, match} = this.props;
		const className = match.params.class;
		methods.fetchByClass(className);
		return(
			<Fragment>
				<h2>ClassList</h2>
				<ul>
					{
						students.map(student=>{
								const compound_name = `${student.first_name} ${student.last_name}`;
								return <li key={student.id}> <Link to={`/student/${student.id}`} >{ compound_name }</Link></li>
							}
						)
					}
				</ul>
			</Fragment>
		);
	}
}