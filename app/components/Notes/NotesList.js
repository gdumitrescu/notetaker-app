'use strict';

var React = require('react');

var NotesList = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired
  },
  render: function() {
    var notesList;
    var notes = this.props.notes;
    if (notes && notes.length > 0) {
      notesList = notes.reverse().map(function(note, index) {
        return (
          <li className="list-group-item" key={index}>
            {note}
          </li>
        );
      });
    } else {
      notesList = (
        <li className="list-group-item">
          No notes found for {this.props.username}.
        </li>
      );
    }
    return (
      <ul className="list-group">
        {notesList}
      </ul>
    );
  }

});

module.exports = NotesList;
