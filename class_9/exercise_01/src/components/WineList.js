import React, { Component } from 'react';

export default class WineList extends Component{
	render(){
		const {wines, methods} = this.props;
		return(
			<div className="list">
				<h2>Wines</h2>
				<ul>
					{
						wines.map(wine=><li key={wine.id} onClick={()=>methods.handleClickDetail(wine.id)} className="list_item">{wine.name}</li>)
					}
				</ul>
			</div>
		);
	}
}