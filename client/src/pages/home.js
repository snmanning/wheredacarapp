import React, { Component } from 'react';
import Logo from '../components/Logo';

class Home extends Component {
    render() {
        return(
            <div>
                <Logo/>
                <div>
                    <button>Find!</button>
                    <button>Park</button>
                    <button>Unpark</button>
                </div>
            </div>
        );
    }
}

export default Home;