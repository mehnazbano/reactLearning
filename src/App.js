import React, { Component } from 'react';
//import Radium, { StyleRoot } from 'radium';
import './App.css';
import Common from './Web/Common.js';

class App extends Component {
  state = {
	  person: [
      { name: "Mehnaz", designation: "Full Stack Developer", id: 1},
      { name: "Mazid", designation: "Branch Manager", id: 2},
		  { name: "Sahin", designation: "House Wife", id: 3},
      { name: "Gulnaz", designation: "House Wife", id: 4},
		  { name: "Wajid", designation: "JWM", id: 5}
	 ]
	}

  swapPersonHandler = (newDesignation) => {
    this.setState({person: [{name: "Mr. Mazid Ali", designation: newDesignation },{name: "Mr. Wajid Ali", designation: "JWM in Opto Electronics factory"} ]})
  }

  designationChangeHandler = (event) => {
    this.setState({person: [{name: "Mr. Mazid Ali", designation: event.target.value },{name: "Mr. Wajid Ali", designation: "JWM in Opto Electronics factory"} ]})
  }

  deletePersonHandler = (id) => {
    var persons = this.state.person
    persons.splice(id,1)
    this.setState({person: persons })
  }

  render() {
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
    const section_style = {
      border: '1px solid #232324',
      width: '30%',
      marginLeft: '35%',
      padding: '10px',
      marginTop: '10px',
      '@media (min-width: 200px)': {
        width: '400px'
      }
    }
    if (this.state.person.length < 2)
      {
        style.backgroundColor = '#1e9fde'
        style[':hover'] = { backgroundColor: '#75acdc' }
      }
    else if (this.state.person.length < 4)
      {
        style.backgroundColor = '#6468e7'
        style[':hover'] = { backgroundColor: '#8087e9'}
      }
    return (
      //<StyleRoot>
      <div className="App">
        <h3>Hello! This is my first React app.</h3>
        <button style={style}>Click me</button>
        { this.state.person.map((data,index) => {
            return <Common name={data.name} key={data.id} style={section_style} designation={data.designation} click={ (event) => { this.deletePersonHandler(index) } }/>
        })}
        {
        /*
        <Common name="Mehnaz" designation="IT Analyst" click={ (event) => { this.deletePersonHandler(event.target.id) } }/>
         <Common name="Sabrish" designation="Web Designer" click={ (event) => { this.deletePersonHandler(event.target.id) } }/>
         <Common name="Gulnaz" designation="Artist" click={ (event) => { this.deletePersonHandler(event.target.id) } }/>
         <Common name={this.state.person[0].name} designation={this.state.person[0].designation} click={this.swapPersonHandler.bind(this, "IT Engineer")} changed={this.designationChangeHandler} />
         <Common name={this.state.person[1].name} designation={this.state.person[1].designation} click={this.swapPersonHandler.bind(this, "Family person")} />
        */
        }
      </div>
      //</StyleRoot>
    );
  }
}
export default App;
//export default Radium(App);
