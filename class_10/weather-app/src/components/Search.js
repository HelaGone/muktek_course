import React, {Component, Fragment} from 'react';

export default class Sidebar extends Component{

	render(){
		const {handleInput} = this.props
		return(
			<Fragment>
				<form onSubmit={handleInput.handleInput} >
					<input name="input_search" type="search" placeholder="Buscar..." />
				</form>
			</Fragment>
		);
	}
}