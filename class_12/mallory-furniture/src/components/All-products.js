import React, {Component, Fragment} from 'react';
import Item from './Item';
import {Link} from 'react-router-dom';

export default class AllProducts extends Component{
	render(){
		const {allproducts, methods, isOnSale} = this.props;
		let the_prod = [];
		if(allproducts!==undefined){
			the_prod = isOnSale ? allproducts.filter(product=>product.onSale===true) :  allproducts;
		}

		return(
			<Fragment>
				<section className="product_section sections">
					<h2>All Products</h2>
					<p>All available listings</p>
					<div>
						<button onClick={methods.handleClick}>All items</button>
						<button onClick={methods.handleClickOnSale}>On Sale</button>
						<p>{`${the_prod.length}items showing`}</p>
					</div>
					<div>
						<ul className="item_pool">
						{
							the_prod.map(product=><Link key={product._id} to={`/product/${product._id}`}><Item product={product}/></Link>)
						}
						</ul>
					</div>
				</section>
			</Fragment>
		);
	}
}