import React, { Component, Fragment } from 'react';

export default class RegionList extends Component{
	render(){
		const {regions, methods} = this.props;
		return(
			<div className="list">
				<h2>Regions</h2>
				<ul className="region_list">
					{
						regions.map((region, i)=><li key={i} className="list_item" onClick={()=>methods.handleClick(region, i)}>{region}</li>)
					}
				</ul>
			</div>
		);
	}
}