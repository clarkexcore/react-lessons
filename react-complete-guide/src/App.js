// Always need to import React
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  //Always need to render HTML to the DOM
  render() {
    return (
      //This is JSX not HTML.
      <div className="App">
        <h1>Hello I'm a React App</h1>
      </div>
      
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

//We need to always export these things. 
export default App;
