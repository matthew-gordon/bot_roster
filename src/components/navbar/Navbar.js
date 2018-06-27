import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  _handleLogin = () => {
    const { login } = this.props;

    login('admin', this.props.history);
  }

  _handleLogout = () => {
    const { logout } = this.props;

    logout();
  }

  render() {
    const { currentUser } = this.props;

    if (!currentUser) {
      return (
        <nav className="navbar navbar-expand-md navbar-light fixed-top bg-white justify-content-between">
          <Link className="navbar-brand" to="/">
            {this.props.appName}
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="navbar-nav">
            <li className="nav-item text-center">
              <button onClick={this._handleLogin} className="btn btn-primary"><small>LOGIN</small></button>
            </li>
          </ul>
        </nav>
      );
    }

    return (
      <nav className="navbar navbar-expand-md navbar-light fixed-top bg-white navbarshadow">
        <Link className="navbar-brand" to="/">
          {this.props.appName}
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">

          <ul className="navbar-nav">
            <li className="nav-item dropdown text-center">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="http://placehold.it/28x28" className="rounded-circle" alt="" />&nbsp; {currentUser.username}
              </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/teams">
                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i>&nbsp; Teams
                </Link>
                <Link className="dropdown-item" to="/messages">
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>&nbsp; Messages
                </Link>
                <Link className="dropdown-item" to="/settings">
                  <i className="fa fa-cog" aria-hidden="true"></i>&nbsp; Settings
                </Link>
                <div className="dropdown-divider"></div>
                <Link onClick={this._handleLogout} className="dropdown-item" to="/logout">
                  <i className="fa fa-sign-out" aria-hidden="true"></i>&nbsp; Logout
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
