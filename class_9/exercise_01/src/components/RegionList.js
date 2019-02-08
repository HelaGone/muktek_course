import React, { Component } from 'react';

export default class RegionList extends Component{
	render(){
		const {regions, methods} = this.props;
		return(
			<ul className="region_list list">
				{
					regions.map((region, i)=><li key={i} className="list_item" onClick={methods.handleClick}>{region}</li>)
				}
			</ul>
		);
	}
}