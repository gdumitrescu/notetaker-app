'use strict';

var React = require('react');
var Router = require('react-router');
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');

var helpers = require('../utils/helpers');

var UserProfile = require('./Github/UserProfile');
var Repos = require('./Github/Repos');
var Notes = require('./Notes/Notes');

var Profile = React.createClass({
  mixins: [
    Router.State,
    ReactFireMixin
  ],
  init: function() {
    // get username from parameters
    var username = this.getParams().username;

    // use username with Firebase
    var childRef = this.ref.child(username);
    this.bindAsArray(childRef, 'notes');

    // fetch Github data
    helpers
      .getGithubInfo(username)
      .then(function(data) {
        this.setState({
          bio: data.bio,
          repos: data.repos
        });
      }.bind(this));
  },
  getInitialState: function() {
    return {
      notes: [],
      bio: {},
      repos: []
    };
  },
  componentDidMount: function() {
    var FB_URL = 'https://contents.firebaseio.com/notetaker';
    this.ref = new Firebase(FB_URL);
    this.init();
  },
  componentWillUnmount: function() {
    this.unbind('notes');
  },
  componentWillReceiveProps: function() {
    this.unbind('notes');
    this.init();
  },
  handleAddNote: function(newNote) {
    var username = this.getParams().username;
    var notes = this.state.notes;
    this.ref.child(username).set(notes.concat([newNote]));
  },
  render: function() {
    var username = this.getParams().username;
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
              addNote={this.handleAddNote} />
        </div>
      </div>
    );
  }

});

module.exports = Profile;
