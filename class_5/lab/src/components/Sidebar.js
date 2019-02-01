import React, { Component, Fragment } from 'react';
import Filters from './Filters';
import Search from './Search';

export default class Sidebar extends Component{

	render(){
		return(
			<Fragment>
				<div className="sidebar sides">
					<Search />
					<Filters />
				</div>
			</Fragment>
		);
	}
}