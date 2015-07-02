'use strict';

import React from 'react';

import helpers from '../utils/helpers';

import UserProfile from './Github/UserProfile';
import Repos from './Github/Repos';
import Notes from './Notes/Notes';

import Rebase from 're-base';

var FB_URL = 'https://contents.firebaseio.com/notetaker/';
var base = Rebase.createClass(FB_URL);

class Profile extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      bio: {},
      repos: []
    };
  }
  init() {
    // get username from parameters
    var username = this.router.getCurrentParams().username;

    // use username with re-base
    this.ref = base.bindToState(username, {
      context: this,
      asArray: true,
      state: 'notes'
    });

    // fetch Github data
    helpers
      .getGithubInfo(username)
      .then((data) => {
        this.setState({
          bio: data.bio,
          repos: data.repos
        });
      });
  }
  componentWillMount() {
    this.router = this.context.router;
  }
  componentDidMount() {
    this.init();
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  componentWillReceiveProps() {
    base.removeBinding(this.ref);
    this.init();
  }
  handleAddNote(newNote) {
    var username = this.router.getCurrentParams().username;
    var notes = this.state.notes;
    base.post(username, {
      data: notes.concat([newNote])
    });
  }
  render() {
    var username = this.router.getCurrentParams().username;
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes
              username={username}
              notes={this.state.notes}
              addNote={this.handleAddNote.bind(this)} />
        </div>
      </div>
    );
  }
}

Profile.contextTypes = {
  router: React.PropTypes.func.isRequired
};

module.exports = Profile;
