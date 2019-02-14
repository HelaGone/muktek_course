import React, {Component, Fragment} from 'react';

export default class Detail extends Component{
	render(){
		const {weather} = this.props;
		let wdaily = {}
		if(weather.daily!==undefined){
			wdaily = weather.daily
			console.log(wdaily);
		}
		return(
			<Fragment>
				<section id="detail_section" className="detail_container sides">
					<h1>Detail</h1>
					<ul>
					</ul>
				</section>
			</Fragment>
		);
	}
}