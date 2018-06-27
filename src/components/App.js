import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Navbar from '../components/navbar/Navbar';

import routes from '../routes';

class App extends Component {
  render() {
    const { appName, currentUser, loginUser } = this.props;

    return (
      <div className="app">
        <Navbar
          appName={appName}
          currentUser={currentUser}
          login={loginUser}
          history={this.props.history}
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

const mapStateToProps = (state) => ({
  appName: state.common.appName,
  currentUser: state.common.currentUser,
});

export default withRouter(connect(mapStateToProps, actions)(App));
