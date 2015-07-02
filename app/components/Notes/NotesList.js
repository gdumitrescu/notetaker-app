'use strict';

import React from 'react';

class NotesList extends React.Component{

  render() {
    var notesList;
    var notes = this.props.notes;
    if (notes && notes.length > 0) {
      notesList = notes.reverse().map((note, index) => {
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
}

NotesList.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired
};

export default NotesList;
