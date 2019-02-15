import React, {Component, Fragment} from 'react';

export default class Catbtn extends Component{
	render(){
		const {category, handleClick} = this.props;
		return(
			<button onClick={handleClick}  value={category} >{category}</button>
		);
	}
}