import React, { Component } from 'react';
import Logo from '../components/Logo';

class SignUp extends Component {
    render() {
        return(
            <div>
                <Logo/>
                <h2>Sign Up</h2>
                <form>
                    <div><input type='text' placeholder='Email'/></div>
                    <div><input type='text' placeholder='Password'/></div>
                    <div><button/>Submit</div>
                </form>
            </div>
        );
    }
}

export default SignUp;