import React, {Component, Fragment} from 'react'
import SItem from './ShoppingItem';

export default class ShoppingCart extends Component{
	render(){

		const {inCart} = this.props;

		console.log(inCart);

		return(
			<Fragment>
				<section id="toggle_cart" className="shopping_sidebar">
					<div className="sc_header">
						<button onClick={()=>document.getElementById('toggle_cart').style.width = '0vw'}>X</button>
						<h3>Your Shopping Cart</h3>
					</div>
					<ul>
						{
							inCart.map(product=><SItem key={product._id} itemData={product}/>)
						}
					</ul>
				</section>
			</Fragment>
		);
	}
}