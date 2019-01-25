import React, {Component} from 'react';

function People(props){
	return(
		<React.Fragment>
			<p>TOTAL: {props.data.length}</p>
			<ul>
				{props.data.map((p)=>{return <li key={p.id}>{p.name}</li>})}
			</ul>
		</React.Fragment>
	);
}

export default People;