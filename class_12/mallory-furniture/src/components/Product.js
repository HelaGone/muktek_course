import React, {Component, Fragment} from 'react';

export default class Product extends Component{
	render(){

		const {allproducts, methods} = this.props;
		const {product_id} = this.props.match.params;

		const product_detail = allproducts.filter(product=>product._id===product_id);

		let product_object = {};

		if(typeof(product_detail) === 'object'&&product_detail.length!==0){
			product_object = product_detail[0];

			// console.log(product_object);
			return(
				<Fragment>
					<section className="product_section sections product_detail">
						<div className="image_detail_container">
							<img src={product_object.imageLink} alt={product_object.item}/>
						</div>
						<div className="product_info_container">
							<div className="product_name_price">
								<h2>{product_object.item}</h2>
								<h3>{`¥${product_object.price}`}</h3>
							</div>

							<div className="product_info_detail_container">
								<div className="">
									<p className="_tag">Condition</p>
									<p>{product_object.condition}</p>
								</div>
								<div className="">
									<p className="_tag">Measurements</p>
									<p>{`W: ${product_object.width} H: ${product_object.height} L: ${product_object.length}`}</p>	
								</div>
								<div className="atc_btn_container">
									<button onClick={()=>methods.handleAddToCart(product_object)}>Add To cart</button>
								</div>
							</div>
						</div>
					</section>
				</Fragment>
			);
		}
		return null;
	}
}