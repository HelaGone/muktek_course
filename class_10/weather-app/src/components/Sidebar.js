import React, {Component, Fragment} from 'react';
import Search from './Search';

export default class Sidebar extends Component{
	render(){
		const {cities, methods} = this.props;
		return(
			<Fragment>
				<section className="sidebar_container sides">
					<div className="search_container">
						<Search handleInput={methods} />
					</div>
					<ul className="city_list">
						{
							cities.map(city=><li key={city.id} className="city_item"><button onClick={()=>methods.handleCityClick(city.name)}>{city.name}</button></li>)
						}
					</ul>
				</section>
			</Fragment>
		);
	}
}