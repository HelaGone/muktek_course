import React, {Component, Fragment} from 'react';
import Cover from '../images/interior-design.jpg';
import Item from './Item';
import Catbtn from './Catbtn';

export default class Home extends Component{
	render(){
		const {allproducts, methods, showall, categories, currentCat} = this.props
		let the_prod = [];
		const {handleClickCat} = methods;

		if(allproducts!==undefined){
			if(currentCat===''){
				the_prod = showall ? allproducts : allproducts.filter(product=>product.featured===true);
			}else{
				the_prod = allproducts.filter(product=>product.category===currentCat);
			}
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
						the_prod.map(product=><Item key={product._id} product={product}/>)
					}
					</ul>

					<div className="show_all_container">
						<button onClick={methods.handleClick} className="show_all">All Products</button>
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