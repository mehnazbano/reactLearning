import React from 'react';
import Aux from '../../HOC/Aux';

const Cockpit = (props) => {
  return (
  	<Aux>
	    <h3>Hello! This is my first React app. {props.title} </h3>
	    <button style={props.style} onClick={props.click}>{props.show ? 'Hide All' : 'Show All'}</button>
    </Aux>
  )
}

export default Cockpit;