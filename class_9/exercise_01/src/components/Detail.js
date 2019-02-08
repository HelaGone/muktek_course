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
				<h2>Wine Details</h2>
				{
					showImg && (
						<div>
							<img src={currentImgSrc} alt="Wine 1"/>
							<figcaption>
								<h2>{currentWine.name}</h2>
								<ul>
									<li>
										<p><strong>Appellation:</strong>{appellName}</p>
									</li>
									<li>
										<p><strong>Region:</strong>{region}</p>
									</li>
									<li>
										<p><strong>Color:</strong>{currentWine.type}</p>
									</li>
									<li>
										<p><strong>Grapes:</strong>{grapes}</p>
									</li>
								</ul>
							</figcaption>
						</div>
						)
				}
				</figure>
			</Fragment>
		);
	}
}