import React, { Component } from 'react';
import MapContainer from '../components/MapContainer';
import Logo from '../components/Logo';

class Find extends Component {
    render() {
        return(
            <div>
                <Logo/>
                <MapContainer/>
                <div><button/></div>
            </div>
        );
    }
}

export default Find;