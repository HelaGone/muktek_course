import React, {Component} from 'react';
import Stats from './Stats';

class Shot extends Component{
	render(){

		const item_data = this.props.item;

		console.log(item_data);

		return(
			<figure>
				<img src={item_data.img} />
				<figcaption>
					<Stats stats={item_data.stats}/>
				</figcaption>
			</figure>
		);
	}
}

export default Shot;