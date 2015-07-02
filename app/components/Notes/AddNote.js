'use strict';

import React from 'react';

class AddNote extends React.Component{

  handleSubmit() {
    var noteInput = this.refs.note.getDOMNode();
    var newNote = noteInput.value;
    noteInput.value = '';
    this.props.addNote(newNote);
  }
  render() {
    return (
      <div className="input-group">
        <input type="text"
          className="form-control"
          ref="note" placeholder="Add New Note" />
        <span className="input-group-btn">
          <button className="btn btn-default"
            type="button"
            onClick={this.handleSubmit.bind(this)}>Submit</button>
        </span>
      </div>
    );
  }
}

AddNote.propTypes = {
  username: React.PropTypes.string.isRequired,
  addNote: React.PropTypes.func.isRequired
};

export default AddNote;
