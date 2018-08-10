import React, { Component } from 'react';
import Logo from '../components/Logo';

class Home extends Component {
    render() {
        return(
            <div>
                <Logo/>
                <div>
                    <div><button>Find!</button></div>
                    <div><button>Park</button></div>
                    <div><button>Unpark</button></div>
                </div>
            </div>
        );
    }
}

export default Home;