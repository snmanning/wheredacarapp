import React, { Component } from 'react';
import Logo from '../components/Logo';

class SignUp extends Component {
    render() {
        return(
            <div>
                <Logo/>
                <form>
                    <div><input type='text'/></div>
                    <div><input type='text'/></div>
                    <div><button/></div>
                </form>
            </div>
        );
    }
}

export default SignUp;