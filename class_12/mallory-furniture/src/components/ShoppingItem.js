import React, {Component, Fragment} from 'react'

export default class ShoppingItem extends Component{
	render(){
		const {itemData} = this.props;
		return(
			<Fragment>
				<div className="sc_item_container">
					<button>X</button>
					<figure className="sc_item_figure">
						<img src={itemData.imageLink} />
						<figcaption>
							<h3>{itemData.item}</h3>
						</figcaption>
					</figure>
				</div>
			</Fragment>
		);
	}
}