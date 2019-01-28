import React, {Component} from 'react';
// import Download from './Download';
import moment from 'moment';

export default class ListItem extends Component {

	btnDownload = ()=>{
		console.log('click');
	}

	render(){
		const {item} = this.props;

		// const time = moment.unix();
		console.log(parseInt(item.added_at));
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

			    <button className="file__button" onClick={this.btnDownload}>
			    	<i className="fa fa-download"></i>
			    </button>

			  </div>
			</li>
		);
	}
}