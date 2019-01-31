import React, {Component} from 'react';
// import Download from './Download';
import moment from 'moment';

export default class ListItem extends Component {

	btnDownload = (event)=>{
		console.log(this.props.item.size);
	}

	render(){
		const {item} = this.props;

		return(
			<li className="file__item">
			  <div className="grid grid--expanded">
			    <div className="grid">
			      <span className="file__icon">
			        <i className="fas fa-file"></i>
			      </span>
			      <p className="file__meta">
			        <span className="file__name">{item.name}</span> <br />
			        <span>Added { moment.unix(parseInt(item.added_at)).fromNow() } · {item.category}</span>
			      </p>
			    </div>

			    <button className="file__button" onClick={this.btnDownload} data-fsize={item.size}>
			    	<i className="fa fa-download"></i>
			    </button>

			  </div>
			</li>
		);
	}
}