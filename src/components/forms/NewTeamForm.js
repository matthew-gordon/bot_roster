import React from 'react';

const NewTeamForm = ({ addTeam, nameInput, descriptionInput }) => {
  return (
    <div style={{ marginBottom: '20px' }} className="col-md-12">
      <form>
        <div className="form-group">
          <label htmlFor="teamName">Name</label>
          <input
            id="teamName"
            className="form-control"
            placeholder="Enter team name..."
            onChange={nameInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="teamDescription">Description</label>
          <textarea
            id="teamDescription"
            className="form-control"
            placeholder="Enter team description..."
            onChange={descriptionInput}
          />
        </div>
      </form>
      <button className="btn btn-success" onClick={addTeam}>ADD TEAM</button>
    </div>
  );
};

export default NewTeamForm;
