import React, { Component } from 'react';
import TeamDetail from '../components/teams/TeamDetail';

class TeamDetailScreen extends Component {
  render() {
    return (
      <div className="landing-screen" style={{ marginTop: '4.5rem' }}>
        <TeamDetail />
      </div>
    );
  }
};

export default TeamDetailScreen;
