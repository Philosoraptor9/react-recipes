import React, { Component } from 'react';
import RecipeContainer from './Containers/RecipeContainer';
import ResultsContainer from './Containers/ResultsContainer';
import './App.css';

class App extends Component {
  constructor(){
    super();

  }
  render() {
    return (
      <div className="App">
        <RecipeContainer />
        <ResultsContainer />
      </div>
    );
  }
}

export default App;
