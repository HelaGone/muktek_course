import React, { Component, Fragment } from 'react';

export default class Student extends Component{

	constructor(props){
		super(props);
		const {match} = props;
		this.state = {
			detail: [],
			studentId: match.params.studentId
		}
	}

	componentDidMount(){
		const {studentId} = this.state;
		const data_url = `http://localhost:3000/students/${studentId}`;
		fetch(data_url)
		.then(response=>response.json())
		.then(data=>{
		  this.setState({
		    detail: data
		  })
		}).catch(err=>console.error(err));
	}



	render(){
		const {detail, match} = this.state;

		const {first_name, last_name, grade, email} = detail;
		return(
			<Fragment>
				<h2>{`${first_name} ${last_name}`}</h2>
				<ul>
					<li>Grade: {grade}</li>
					<li>Email: {email}</li>
				</ul>
			</Fragment>
		);
	}
}