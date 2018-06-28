import React from 'react';

const roster = [
  {
    name: 'Matteo',
    speed: 23,
    agility: 12,
    strength: 43,
    isStarter: true,
  },
  {
    name: 'Matteo',
    speed: 23,
    agility: 12,
    strength: 43,
    isStarter: true,
  },
  {
    name: 'Matteo',
    speed: 23,
    agility: 12,
    strength: 43,
    isStarter: false,
  },
  {
    name: 'Matteo',
    speed: 23,
    agility: 12,
    strength: 43,
    isStarter: false,
  },
];

const TeamDetail = () => {
  return (
    <div className="container">
      <div className="row" style={{ marginBottom: '1.5rem' }}>
        <div className="col-md-12">
          <button className="btn btn-outline-warning">New Team</button>
        </div>
      </div>
      <div className="row">
        {roster.map(player => {
          const className = player.isStarter ? `card bg-success` : `card`;

          return (
            <div className="col-md-3">
              <div className={className}>
                <img className="card-img-top" src="http://placehold.it/200x100" alt="" />
                <div className="card-body">
                  <h5 className="card-title">{player.name}</h5>
                  <p className="card-text">{player.bio}</p>
                  <div className="d-flex justify-content-around text-center">
                    <div>
                      <span class="badge badge-success">Agility</span>
                      <p className="card-text">{player.agility}</p>
                    </div>
                    <div>
                      <span class="badge badge-primary">Strength</span>
                      <p className="card-text">{player.strength}</p>
                    </div>
                    <div>
                      <span class="badge badge-warning">Speed</span>
                      <p className="card-text">{player.speed}</p>
                    </div>
                  </div>
                </div>
                <div className="card-footer text-center">
                  <h3 className="card-text">Overall score: <span class="badge badge-info">{(player.agility + player.strength + player.speed) / 3}</span></h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamDetail;
