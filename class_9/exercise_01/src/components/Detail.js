import React, { Component, Fragment } from 'react';

export default class Detail extends Component{
	render(){

		const {currentWine, currentImgSrc, showImg} = this.props;
		

		const appellName = (typeof(currentWine.appellation)==='object') ? currentWine.appellation.name : null;
		const region = (typeof(currentWine.appellation)==='object') ? currentWine.appellation.region : null;
		const grapes = (typeof(currentWine.grapes)==='object') ? currentWine.grapes.join(', ') : null;

		return(
			<Fragment>
				<figure className="item_figure list">
					{
						showImg && <img src={currentImgSrc} alt="Wine 1"/>
					}
					<figcaption>
						<h2>{currentWine.name}</h2>
						<ul>
							<li>
								<strong>Appellation:</strong>{appellName}
							</li>
							<li>
								<strong>Region:</strong>{region}
							</li>
							<li>
								<strong>Color:</strong>{currentWine.type}
							</li>
							<li>
								<strong>Grapes:</strong>{grapes}
							</li>
						</ul>
					</figcaption>
				</figure>
			</Fragment>
		);
	}
}