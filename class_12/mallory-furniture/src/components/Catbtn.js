import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Catbtn extends Component{
	render(){
		const {category} = this.props;
		return(
			<Link to={`category/${category}`} className="">{category}</Link>
		);
	}
}