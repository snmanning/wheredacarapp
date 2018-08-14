import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';

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
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={LogIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/park' component={Park} />
          <Route path='/find' component={Find} />
          <Redirect to='/' />
        </Switch>
      </div>
    );
  }
}

export default App;
