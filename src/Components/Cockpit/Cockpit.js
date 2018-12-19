import React from 'react';

const Cockpit = (props) => {
  return (
  	[
    <h3>Hello! This is my first React app. {props.title} </h3>,
    <button style={props.style} onClick={props.click}>{props.show ? 'Hide All' : 'Show All'}</button>
    ]
  )
}

export default Cockpit;