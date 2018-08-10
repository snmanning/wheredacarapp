import React, { Component } from 'react';
import './App.css';
import Logo from './components/Logo';

import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Park from './pages/Park';
import Find from './pages/Find';

class App extends Component {
  render() {
    return (
      <div>
        <Logo/>
        <SignUp/>
        <LogIn/>
        <Home/>
        <Park/>
        <Find/>
      </div>
    );
  }
}

export default App;
