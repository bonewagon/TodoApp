import React from 'react';

export const Note = ({ note, ...props }) => {
  console.log(note.id);
  return (
    <li className="list-group-item note-item">
      <div className="note">
        <strong>{note.title}</strong>
        <small>{new Date().toLocaleDateString()}</small>
      </div>

      <button
        type="button"
        className="btn btn-danger"
        onClick={props.deleteNote}
      >
        &times;
      </button>
    </li>
  );
};
