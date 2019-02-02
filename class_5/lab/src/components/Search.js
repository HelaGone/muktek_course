import React, { Component, Fragment } from 'react';

export default class Search extends Component{
	render(){
		const {searchMethod} = this.props;
		return(
			<Fragment>
				<input type="search" placeholder="buscar..." onChange={searchMethod}/>
				<br/>
			</Fragment>
		);
	}
}
