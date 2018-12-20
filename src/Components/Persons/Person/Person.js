import React, { Component } from 'react';
import styles from './Person.css';
import withClass from '../../../HOC/withClass';
import Aux from '../../../HOC/Aux';
import PropTypes from 'prop-types'
import {AuthContext} from '../../../Containers/App'

class Person extends Component {
  constructor(props) {
    super(props)
    console.log("[Person.js] constructor")
    this.inputElement = React.createRef();
  }

  componentWillMount(){
    console.log("[Person.js] componentWillMount")
  }

  componentDidMount(){
    console.log("[Person.js] componentDidMount")
    if (this.props.position == 0) {
      this.inputElement.current.focus()
    }
  }

  // componentWillReceiveProps(nextProps){
  //   console.log("[Person.js] componentWillReceiveProps")
  // }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log("[Person.js] shouldComponentUpdate")
  //   return true
  // }

  componentWillUpdate(){
    console.log("[Person.js] componentWillUpdate")
  }

  componentDidUpdate(){
    console.log("[Person.js] componentDidUpdate")
  }

  render(){
    console.log("[Person.js] render()")
    const section_style = {
      border: '1px solid rgb(122, 122, 133)',
      width: '30%',
      marginLeft: '35%',
      padding: '10px',
      marginTop: '10px',
      borderRadius: '5px',
      '@media (minWidth: 200px)': {
        width: '400px'
      }
    }
    const input_style = {
      padding: '5px',
      color: '#474845'
    }
    return (
      <Aux>
        <AuthContext.Consumer>
          { (auth) => auth ? <p>I am Authenticated</p> : null }
        </AuthContext.Consumer>
        <h3 className={styles.h3} onClick={this.props.click} >Welcome {this.props.name} - {this.props.designation}.</h3>
        <input type="text" ref={this.inputElement} style={input_style} onChange={this.props.changed} defaultValue={this.props.designation} />
      </Aux>
    )
  }
}

Person.propTypes = {
  name: PropTypes.string,
  designation: PropTypes.string,
  click: PropTypes.func,
  changed: PropTypes.func
}

export default withClass(Person, styles.section_body );