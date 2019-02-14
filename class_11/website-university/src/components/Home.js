import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';


export default class Home extends Component{

	render(){
		const {classes} = this.props;
		return(
			<Fragment>
				<h1>Home page</h1>
				<ul>
					{classes.map((clase, i)=>{
						return(
							<li key={i}>
							<Link to={`classlist/${clase}`}>{clase}</Link>
							</li>
						);
					})}
				</ul>
			</Fragment>
		);
	}
}