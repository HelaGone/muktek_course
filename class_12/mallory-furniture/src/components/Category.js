import React, {Component, Fragment} from 'react';
import Item from './Item';

export default class Category extends Component{
	render(){
		const {allproducts, methods, isOnSale} = this.props;
		const {category} = this.props.match.params;
		const products_by_cat = allproducts.filter(product=>product.category===category);
		const display_products = (isOnSale) ? products_by_cat.filter(product=>product.onSale===true) : products_by_cat;
		return(
			<Fragment>
				<section className="product_section sections">
					<h2>{category.toUpperCase()}</h2>
					<p>{`All ${category} products`}</p>
					<div>
						<button onClick={methods.handleClick}>All items</button>
						<button onClick={methods.handleClickOnSale}>On Sale</button>
						<p>{`${display_products.length}items showing`}</p>
					</div>
					<div>
						<ul className="item_pool">
						{
							display_products.map(product=><Item key={product._id} product={product}/>)
						}
						</ul>
					</div>
				</section>
			</Fragment>
		);
	}
}