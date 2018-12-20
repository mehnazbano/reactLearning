import React from 'react';

// Approach 1
// const WithClass = (props) => {
//   return (
//   	<div className={props.classes}>
//   	   {props.children}
//     </div>
//   )
// }

// Approach 2 - Normal JS function (Not Component)
const withClass = (WrappedComponent, classes) => {
  return (props) => (
  	<div className={classes}>
  	   <WrappedComponent {...props}/>
    </div>
  )
}


export default withClass;