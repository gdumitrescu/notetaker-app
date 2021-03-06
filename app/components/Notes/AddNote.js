'use strict';

var React = require('react');

var AddNote = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired
  },
  handleSubmit: function() {
    var noteInput = this.refs.note.getDOMNode();
    var newNote = noteInput.value;
    noteInput.value = '';
    this.props.addNote(newNote);
  },
  render: function() {
    return (
      <div className="input-group">
        <input type="text"
          className="form-control"
          ref="note" placeholder="Add New Note" />
        <span className="input-group-btn">
          <button className="btn btn-default"
            type="button"
            onClick={this.handleSubmit}>Submit</button>
        </span>
      </div>
    );
  }
});

module.exports = AddNote;
