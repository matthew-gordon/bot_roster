import React from 'react';
import { Link } from 'react-router-dom';

const TeamCard = ({ team }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <Link to={`/teams/${team.id}`} style={{ textDecoration: 'none' }}>
          <h5 className="card-title">{team.name}</h5>
          <p className="card-text">{team.description}</p>
        </Link>
        <Link to={`/team/${team.id}/roster`} className="btn btn-primary">view roster</Link>
      </div>
    </div>
  );
};

export default TeamCard;
