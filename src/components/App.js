import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from '../components/navbar/Navbar';

import routes from '../routes';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar
          appName={'Bot Roster'}
        />

        <div className="main-content">
          <Switch>
            {routes.map(route => <Route key={route.name} {...route} {...this.props} />)}
          </Switch>
        </div>
      </div>
    );
  }
};

export default App;
