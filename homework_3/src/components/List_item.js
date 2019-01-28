import React, {Component} from 'react';
import Download from './Download';

export default class ListItem extends Component {
	render(){

		const {item} = this.props;
		// console.log(item);
		return(
			<li className="file__item">
			  <div className="grid grid--expanded">
			    <div className="grid">
			      <span className="file__icon">
			        <i className="fas fa-file"></i>
			      </span>
			      <p className="file__meta">
			        <span className="file__name">{item.name}</span> <br />
			        <span>Added {item.added_at} · {item.category}</span>
			      </p>
			    </div>

			    <Download />
			  </div>
			</li>
		);
	}
}