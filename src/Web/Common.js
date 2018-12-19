import React from 'react';
import styles from './Common.css'

const Common = (props) => {
	return (
		<div style={props.style} onClick={props.click}>
		  <h3 onClick={props.click} className={styles.h3}>Welcome {props.name} - {props.designation}.</h3>
		  <input type="text" onChange={props.changed} defaultValue={props.designation}/>
		</div>
	)
};

export default Common;