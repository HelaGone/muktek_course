import React, { Component, Fragment } from 'react';
import Filters from './Filters';
import Search from './Search';

export default class Sidebar extends Component{

	render(){
		const {sidebarMethods} = this.props
		return(
			<Fragment>
				<div className="sidebar sides">
					<Search searchMethod={sidebarMethods.search}/>
					<Filters filterMethods={sidebarMethods} />
				</div>
			</Fragment>
		);
	}
}