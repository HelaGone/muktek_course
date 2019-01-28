import React, { Component } from 'react';

class Person extends Component{
	render(){
		return(
				<li>{this.props.person}</li>
		)
	}
}
export default Person;