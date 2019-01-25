import React, {Component} from 'react';
import Shot from './Shot';
class Shots extends Component{
	render(){
		const data = this.props.data;
		return(
			<ul>
				{
					data.map((item)=>{
						return <Shot key={item.key} item={item}/>
					})
				}
			</ul>
		);
	}
}
export default Shots;