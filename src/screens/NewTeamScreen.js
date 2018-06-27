import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import NewTeamForm from '../components/forms/NewTeamForm';

class NewTeamScreen extends Component {
  state = {
    name: '',
    description: '',
  };

  _handleNameInput = (e) => {
    e.preventDefault();

    this.setState({ name: e.target.value })
  }

  _handleDescriptionInput = (e) => {
    e.preventDefault();

    this.setState({ description: e.target.value })
  }

  _handleNewTeam = () => {
    const { addNewTeam } = this.props;
    const { name, description } = this.state;
    const team = {
      name,
      description,
    };

    addNewTeam(team, this.props.history);
  }

  render() {
    return (
      <div style={{ height: '100vh', marginTop: '4.5rem' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <NewTeamForm
                addTeam={this._handleNewTeam}
                nameInput={this._handleNameInput}
                descriptionInput={this._handleDescriptionInput}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  teams: state.teams,
});

export default connect(mapStateToProps, actions)(NewTeamScreen);
