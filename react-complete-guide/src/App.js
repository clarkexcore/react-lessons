// Always need to import React
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  //State is really important
  state = {
    persons: [
      { name: 'Alex', age: 28},
      { name: 'Matty', age: 27},
      { name: 'Brent', age: 38}
    ]
  }

  //Method for Switch Names
  switchNameHandler = (newName) => {
    //console.log("This was clicked");
    //DO NOT USE this.state.persons[0].name = "Alexander";
    this.setState({
		persons: [
			{ name: 'Alexander', age: 28},
			{ name: 'Matty', age: 28},
			{ name: newName, age: 39}
		]
    })
  }

  //Always need to render HTML to the DOM
  render() {
    return (
      //This is JSX not HTML.
      	<div className="App">
			<h1>Hello I'm a React App</h1>
			<p>This is really working!!</p>
			<button onClick={() => this.switchNameHandler('Killer')}>Switch Name</button>
			<Person 
				name={this.state.persons[0].name} 
				age={this.state.persons[0].age} 
			/>
			<Person 
				name={this.state.persons[1].name} 
				age={this.state.persons[1].age}
				click={this.switchNameHandler.bind(this, "Killer Killer")}
			>
				My Hobbies: Comics
			</Person>
			<Person 
				name={this.state.persons[2].name}
				age={this.state.persons[2].age}
			/>
      	</div>
      
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

//We need to always export these things. 
export default App;
