import React, { Component } from 'react';
import styles from './Person.css'

class Person extends Component {
  constructor(props) {
    super(props)
    console.log("[Person.js] constructor")
  }

  componentWillMount(){
    console.log("[Person.js] componentWillMount")
  }

  componentDidMount(){
    console.log("[Person.js] componentDidMount")
  }

  componentShouldReceiveProps(nextProps){
    console.log("[Person.js] componentShouldReceiveProps")
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("[Person.js] shouldComponentUpdate")
    return true
  }

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
      <div style={section_style} >
        <h3 className={styles.h3} onClick={this.props.click} >Welcome {this.props.name} - {this.props.designation}.</h3>
        <input type="text" style={input_style} onChange={this.props.changed} defaultValue={this.props.designation} />
      </div>
    )
  }
}

export default Person;