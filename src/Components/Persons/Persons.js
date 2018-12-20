import React, { PureComponent } from 'react';
import Person from './Person/Person'
// import PropTypes from 'prop-types'

class Persons extends PureComponent {
  constructor(props) {
    super(props)
    console.log("[Persons.js] constructor")
  }

  componentWillMount(){
    console.log("[Persons.js] componentWillMount")
  }

  componentDidMount(){
    console.log("[Persons.js] componentDidMount")
  }

  // componentShouldReceiveProps(nextProps){
  //   console.log("[Persons.js] componentShouldReceiveProps")
  // }

  shouldComponentUpdate(nextProps, nextState){
    console.log("[Persons.js] shouldComponentUpdate")
    console.log("nextProps.persons")
    console.log(this.props.persons)
    return true
  }

  componentWillUpdate(){
    console.log("[Persons.js] componentWillUpdate")
  }

  componentDidUpdate(){
    console.log("[Persons.js] componentDidUpdate")
  }

  render() {
    console.log("[Persons.js] render")
    return (
      this.props.persons.map( (person, index) =>
      	<Person name={person.name} position={index} key={person.id} designation={person.designation} click={(event) => this.props.click(index)} changed={(event) => this.props.changed(event, index)} />
      )
    )
  }
}

export default Persons;