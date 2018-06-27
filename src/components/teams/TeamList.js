import React from 'react';

import TeamCard from './TeamCard';

const TeamList = ({ teams }) => {
  return (
    <div className="container">
      <div className="row" style={{ marginBottom: '1.5rem' }}>
        <div className="col-md-12">
          <button onClick={this._handleButton} className="btn btn-outline-warning">New Team</button>
        </div>
      </div>
      <div className="row">
        {teams.map(team => {
          return (
            <div key={team.id} className="col-md-4">
              <TeamCard team={team} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamList;
