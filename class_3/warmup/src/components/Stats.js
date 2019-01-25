import React, {Component} from 'react';
class Stats extends Component{
	render(){
		const {stats} = this.props;
		return(
			<ul className="stats_container">
				{
					stats.map((stat_item)=>{
						return <li className="stats_item">{stat_item}</li>
					})
				}
			</ul>
		);
	}
}

export default Stats;