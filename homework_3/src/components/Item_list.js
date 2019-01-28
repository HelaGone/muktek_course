import React, {Component} from 'react';
import ListItem from './List_item';
export default class ItemList extends Component {
	render(){

		const {results} = this.props;
		const res_arr = [];
		Object.keys(results.results).forEach((key)=>{
			res_arr.push(results.results[key])
		});

		// console.log(res_arr);

		return(
			<React.Fragment>
				<ul className="item_list">
					{
						res_arr.map((item)=>{
							return <ListItem key={item.id} item={item}/>
						})
					}
				</ul>
			</React.Fragment>
		);
	}
}