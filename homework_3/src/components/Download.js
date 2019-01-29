import React, {Component} from 'react';

export default class Download extends Component{
	render(){
		const {fsize} = this.props
		return(
			<p className="file_size">{`${fsize}Kb`}</p>
		);
	}
}