import React, { Component } from 'react';
import RecipeContainer from './Containers/RecipeContainer';
import ResultsContainer from './Containers/ResultsContainer';
import AuthGateway from './Components/AuthGateway';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      loggedIn: false,
      currentUser: {}
    }
  }
handleInput = (e) => {
   this.setState = ({
     [e.currentTarget.name]: e.currentTarget.value
   })
  }
handleRegistration = async (formData) =>{
    e.preventDefault()
    console.log(formData);
    const newUser = await fetch('http://localhost:9000/user',
    {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {'Content-Type': 'application/json'}
    })
    console.log(formData);
}
  render() {
    return this.state.loggedIn ? (
      <div className="App">
        <RecipeContainer />
        <ResultsContainer />
      </div>
    ) : <AuthGateway handleRegistration={this.handleRegistration}/>;
  }
}

export default App;
