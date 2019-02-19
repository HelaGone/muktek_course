import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Cart from './ShoppingCart';
import cart_icon from '../images/baseline_shopping_cart_white_18dp.png';

export default class Header extends Component{
	render(){
		const {categories, inCart} = this.props;
		return(
			<Fragment>
				<header id="main_header">
					<nav className="main_nav">
						<ul>
							<li className="nav_item"><Link to="/">Home</Link></li>
							<li className="nav_item"><Link to="/about">About</Link></li>
							<li className="nav_item"><Link to="/terms-conditions">Terms + Conditions</Link></li>
							<li className="nav_item"><Link to="/all">All</Link></li>
							{
								categories.map(category=>{
									return <li key={category}><Link to={`/category/${category}`}>{category}</Link></li>
								})
							}
							<li className="nav_item" onClick={()=>document.getElementById('toggle_cart').style.width = '20vw'}>
								<img src={cart_icon} alt="Shopping Cart"/>
							</li>
						</ul>
					</nav>
				</header>
				<Cart inCart={inCart}/>
			</Fragment>
		);
	}
}