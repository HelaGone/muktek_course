import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component{
	render(){
		return(
			<Fragment>
				<header>
					<h1>WestSide University</h1>
					<nav>
						<Link to="/about">About</Link>
						<Link to="/">Home</Link>
					</nav>
				</header>
			</Fragment>
		);
	}
}