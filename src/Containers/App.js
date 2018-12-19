import React, { Component } from 'react';
//import Radium, { StyleRoot } from 'radium';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props)
    console.log("[App.js] constructor")
  }

  componentWillMount(){
    console.log("[App.js] componentWillMount")
  }

  componentDidMount(){
    console.log("[App.js] componentDidMount")
  }

  componentShouldReceiveProps(nextProps){
    console.log("[App.js] componentShouldReceiveProps")
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("[App.js] shouldComponentUpdate")
    return true
  }

  componentWillUpdate(){
    console.log("[App.js] componentWillUpdate")
  }

  componentDidUpdate(){
    console.log("[App.js] componentDidUpdate")
  }

  state = {
	  persons: [
      { name: "Mehnaz", designation: "Full Stack Developer", id: 1},
      { name: "Mazid", designation: "Branch Manager", id: 2},
		  { name: "Sahin", designation: "House Wife", id: 3},
      { name: "Gulnaz", designation: "House Wife", id: 4},
      { name: "Sabrish", designation: "Designer", id: 5},
		  { name: "Wajid", designation: "JWM", id: 6}
	 ],
   showPerson: false
	}

  swapPersonHandler = (newDesignation) => {
    this.setState({persons: [{name: "Mr. Mazid Ali", designation: newDesignation },{name: "Mr. Wajid Ali", designation: "JWM in Opto Electronics factory"} ]})
  }

  designationChangeHandler = (event, id ) => {
    var persons = this.state.persons
    persons[id].designation = event.target.value
    this.setState({persons: persons })
  }

  togglePersonsHandler = () => {
    var showPerson = this.state.showPerson
    this.setState({showPerson: !showPerson })
  }

  deletePersonHandler = (id) => {
    var persons = this.state.persons
    persons.splice(id,1)
    this.setState({persons: persons })
  }

  render() {
    console.log("[App.js] render()")
    const style = {
      padding: '10px',
      backgroundColor: '#e912e0',
      color: '#fff',
      fontSize: '14px',
      borderRadius: '5px',
      fontWeight: 'bold',
      ':hover': {
        backgroundColor: '#eb57ae'
      }
    }
    let persons = null
    if (this.state.showPerson) {
      persons = <Persons persons={this.state.persons} click={this.deletePersonHandler} changed={this.designationChangeHandler} />
    } else {
      persons = null
    }
    if (this.state.persons.length < 2)
      {
        style.backgroundColor = '#1e9fde'
        style[':hover'] = { backgroundColor: '#75acdc' }
      }
    else if (this.state.persons.length < 4)
      {
        style.backgroundColor = '#6468e7'
        style[':hover'] = { backgroundColor: '#8087e9'}
      }
    return (
      <div className={classes.App}>
        <Cockpit style={style} title={this.props.title} click={this.togglePersonsHandler} show={this.state.showPerson} />
        {persons}
        {
        /*
          this.state.person.map((data,index) => {
            return <Common name={data.name} key={data.id} style={section_style} designation={data.designation} click={ (event) => { this.deletePersonHandler(index) } }/>
        })
        }
        {
        <Common name="Mehnaz" designation="IT Analyst" click={ (event) => { this.deletePersonHandler(event.target.id) } }/>
         <Common name="Sabrish" designation="Web Designer" click={ (event) => { this.deletePersonHandler(event.target.id) } }/>
         <Common name="Gulnaz" designation="Artist" click={ (event) => { this.deletePersonHandler(event.target.id) } }/>
         <Common name={this.state.person[0].name} designation={this.state.person[0].designation} click={this.swapPersonHandler.bind(this, "IT Engineer")} changed={this.designationChangeHandler} />
         <Common name={this.state.person[1].name} designation={this.state.person[1].designation} click={this.swapPersonHandler.bind(this, "Family person")} />
        */
        }
      </div>
    );
  }
}
export default App;
