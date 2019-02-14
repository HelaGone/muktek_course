import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends Component{
	render(){
		return(
			<Fragment>
				<h1>Oops! We don't have that content</h1>
				<Link to="/">Get Back Home E.T.!</Link>
			</Fragment>
		);
	}
}