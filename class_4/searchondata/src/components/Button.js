import React, {Component} from 'react';

export default function Button (props) {
	const {open, toggleClick} = props;
		return(
			<button className={open ? "is_visible" : ""} onClick={toggleClick}>
			{open ? "Close" : "Open"}
			</button>
		);
}