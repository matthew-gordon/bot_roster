import React, { Component } from 'react';
import { connect } from 'react-redux';

import TeamList from '../components/teams/TeamList';

class TeamScreen extends Component {
  _handleButton = () => {
    this.props.history.push('/teams/new');
  }

  render() {
    const { teams } = this.props;

    if (!teams.length > 0) {
      return (
        <div style={{ marginTop: '4.5rem' }}>
          <div className="container">
            <h1>There are currently no teams!</h1>
            <button onClick={this._handleButton} className="btn btn-outline-warning">New Team</button>
          </div>
        </div>
      );
    }

    return (
      <div style={{ height: '100vh', marginTop: '4.5rem' }}>
        <TeamList teams={teams} newTeam={this._handleButton} />
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  teams: state.teams,
});

export default connect(mapStateToProps)(TeamScreen);
