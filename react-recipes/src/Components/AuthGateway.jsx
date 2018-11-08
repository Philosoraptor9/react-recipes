import React, { Component } from 'react';

//Login handlers: handle login, handle registration, if user status is 200, set state

class AuthGateway extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleUserName(e){
        this.setState({
            username:  e.target.value})
    }
    handlePassword(e){
        this.setState({
            password: e.target.value})
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.handleRegistration({username: this.state.username, password: this.state.password});
    }

    render() {
        const {handleRegistration} = this.props;
        return (
        <div>
            <h1>Please log in</h1>
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='username' onChange= {this.handleUserName.bind(this)} />
                    
                <input type='text' name='password' onChange= {this.handlePassword.bind(this)} />
                    <button type='submit'>Submit</button>
            </form>
        </div>
            )
    }
}

export default AuthGateway;