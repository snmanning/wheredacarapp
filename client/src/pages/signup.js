import React, { Component } from 'react';

class SignUp extends Component {
    render() {
        return(
            <div>
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