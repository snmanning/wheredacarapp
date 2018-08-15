import React, { Component } from 'react';
import auth from '../services/auth';

class LogIn extends Component {

    state = {
        error: null
    };
    async login(evt){
        evt.preventDefault();
        const form = evt.target;
        const inputs = Array.from(form.elements)
                            .filter(element => element.tagName === 'INPUT');
        const [ email, password ] = inputs.map(input => input.value);
        try {
            await auth.login(email, password);
            this.props.history.push({
                pathname: '/'
            });
        } catch (error) {
            this.setState({
                error: 'Your username or password is incorrect'
            });
            form.reset();
        }
    }

    render() {
        return(
            <div>
                <h1>Login:</h1>
                {this.state.error ? <p>{this.state.error}</p> : null}
                <form onSubmit={this.login.bind(this)}>
                   <div><input type='email' placeholder='Email'/></div>
                    <div><input type='password' placeholder='Password'/></div>
                    <div><button type='submit'>Log in</button></div>
                </form>
                <div>
                    Don't have an accout? <a href=''> (Sign Up)</a>
                </div>
            </div>
        );
    }
}

export default LogIn;