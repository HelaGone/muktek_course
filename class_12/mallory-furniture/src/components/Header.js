import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component{
	render(){
		const {categories} = this.props;
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
						</ul>
					</nav>
				</header>	
			</Fragment>
		);
	}
}