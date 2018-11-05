import React, { Component } from 'react';
import RecipeContainer from './RecipeContainer/RecipeContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RecipeContainer />
      </div>
    );
  }
}

export default App;
