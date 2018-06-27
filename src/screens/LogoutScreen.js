import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LogoutScreen extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="logout-screen">
          <div className="container text-center">
            <h1>We're sorry to see you go!</h1>
            <p>Make sure to log back in to manage team, roster, and account settings!</p>
            <p>Head to the <Link to="/">Home page</Link>...</p>
          </div>
        </div>
      </div>
    );
  }
};

export default LogoutScreen;
