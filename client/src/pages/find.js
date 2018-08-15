import React, { Component } from 'react';
import MapContainer from '../components/MapContainer';

class Find extends Component {
    render() {
        return(
            <div>
                <MapContainer/>
                <div><button>Unpark</button></div>
            </div>
        );
    }
}

export default Find;