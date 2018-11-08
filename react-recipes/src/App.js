import React, { Component } from 'react';
import RecipeContainer from './Containers/RecipeContainer';
import ResultsContainer from './Containers/ResultsContainer';
import AuthGateway from './Components/AuthGateway';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      password: '',
      loggedIn: false,
    }
  }
handleInput = (e) => {
   this.setState = ({
     [e.currentTarget.name]: e.currentTarget.value
   })
  }
handleRegistration = async (e) =>{
    e.preventDefault()
    console.log('Registering user')
    console.log(this.state);
    try{
    const newUser = await fetch('http://localhost:9000/user/register',
    {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {'Content-Type': 'application/json'}
    });
  const parsedResponse = await newUser.json();
  console.log(parsedResponse, ' response from server')
  if (parsedResponse.status == 200){
    this.setState({
      username: parsedResponse.data.username,
      password: parsedResponse.data.password,
      loggedIn: true
    })
  } else if (parsedResponse.status == 500){
    console.log("INTERNAL SERVER ERROR")
  }
}catch(err){
  console.log(err, ' error occurred');
  }
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
