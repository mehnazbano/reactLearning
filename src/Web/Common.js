import React from 'react';

const Common = (props) => {
	return (
		<div style={props.style} onClick={props.click}>
		  <h3 onClick={props.click} >Welcome {props.name} - {props.designation}.</h3>
		  <input type="text" onChange={props.changed} defaultValue={props.designation}/>
		</div>
	)
};

export default Common;
