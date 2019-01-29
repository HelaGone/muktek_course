import React, {Component} from 'react';
import ListItem from './List_item';
export default class ItemList extends Component {
	render(){

		const {results} = this.props;

		return(
			<React.Fragment>
				<ul className="item_list inner_elem" >
					{
						results.map((item)=>{
							return <ListItem key={item.id} item={item}/>
						})
					}
				</ul>
			</React.Fragment>
		);
	}
}