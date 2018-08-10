import React, { Component } from 'react';
import Logo from '../components/Logo';

class LogIn extends Component {
    render() {
        return(
            <div>
                <Logo/>
                <form>
                    <div>
                        <label>Login:</label>
                        <input type='text'/>
                        <input type='text'/>
                        <button>Log in</button>
                        <a>(Sign Up)</a>
                    </div>
                </form>
            </div>
        );
    }
}

export default LogIn;