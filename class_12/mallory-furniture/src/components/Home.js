import React, {Component, Fragment} from 'react';
import Cover from '../images/interior-design.jpg';
import Item from './Item';
import Catbtn from './Catbtn';
import {Link} from 'react-router-dom';

export default class Home extends Component{
	render(){
		const {allproducts, methods, categories, } = this.props
		let featured = [];
		const {handleClickCat} = methods;

		if(allproducts!==undefined){
			featured = allproducts.filter(product=>product.featured===true);
		}

		return(
			<Fragment>
				<figure id="cover_container">
				  <img src={Cover} alt="home cover"/>
				  <figcaption>
				    <h1>Mallory Furniture</h1>
				    <p>Your furniture is old. <br/> Ours is older</p>
				  </figcaption>
				</figure>

				<section className="product_section sections">
					<h2>Featured Products</h2>
					<p>Check out some of our favlurite listing</p>
					<ul className="item_pool">
					{
						featured.map(product=><Link key={product._id} to={`/product/${product._id}`}><Item product={product}/></Link>)
					}
					</ul>

					<div className="show_all_container">
						<Link to="/all" className="show_all">All Products</Link>
					</div>
				</section>

				<section className="cat_section sections">
					<h2>Bowse by Category</h2>
					<p>Explore by furniture type</p>
					<div className="cat_btn_container">
						{
							categories.map((category, i)=><Catbtn key={i} category={category} handleClick={handleClickCat} />)
						}	
					</div>
				</section>

			</Fragment>
		);
	}
}