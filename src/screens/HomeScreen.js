import React, { Component } from 'react';

class HomeScreen extends Component {
  state = {
    teams: [],
  }

  render() {
    return (
      <div className="home-screen" style={{ marginTop: '4.5rem' }}>
        <h1>Home Screen</h1>
        {console.log(this.state.teams)}
      </div>
    );
  }
};

export default HomeScreen;
