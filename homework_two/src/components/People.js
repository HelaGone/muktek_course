import React, { Component } from 'react';
import Person from './Person';

class People extends Component{
	render(){

		const {data, type} = this.props;

		return(
			<div className="type_container">
				<h2>{type}</h2>
				<ul>
					{
						data.map((person)=>{
							return <Person key={person.id} person={person.name} />
						})
					}
				</ul>
			</div>
		);
	}
};

export default People;