import React, {Component, Fragment} from 'react';

export default class Item extends Component{
	render(){
		const {product} = this.props;
		// console.log(product);
		return(
			<Fragment>
				<figure className="item_container">
					<img src={product.imageLink} alt={product.item} />
					<figcaption className="item_info_container">
						<p className="item_name">{product.item}</p>
						<p className="item_price">¥{product.price}</p>
					</figcaption>
				</figure>
			</Fragment>
		);
	}
}