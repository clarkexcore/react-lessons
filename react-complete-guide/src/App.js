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
	
	nameChangeHandler = (event) => {
		this.setState({
			persons: [
				{name: 'Alex', age: 28},
				{name: event.target.value, age: 27},
				{name: 'Brent', age: 38}
			]
		})
	}

  //Always need to render HTML to the DOM
  render() {

    //People like to create style in JS
    //Inline styles are scoped to the component/module/elements
    const style = {
        backgroundColor : 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };


    return (
      //This is JSX not HTML.
      	<div className="App">
			<h1>Hello I'm a React App</h1>
			<p>This is really working!!</p>
			<button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>
            <div>
                <Person 
                    name={this.state.persons[0].name} 
                    age={this.state.persons[0].age} 
                />
                <Person 
                    name={this.state.persons[1].name} 
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, "Killer Killer")}
                    change={this.nameChangeHandler}
                >
                    My Hobbies: Comics
                </Person>
                <Person 
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                />
            </div>
      	</div>
      
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

//We need to always export these things. 
export default App;
