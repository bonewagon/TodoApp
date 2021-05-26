import React from 'react';

export const Note = ({ note, completeNote, removeNote }) => {
  return (
    <li
      className="list-group-item note-item"
      onClick={() => completeNote(note.id)}
    >
      <div className={note.isCompleted ? 'note completed' : 'note'}>
        <strong>{note.text}</strong>
        <small>{new Date().toLocaleDateString()}</small>
      </div>

      <button type="button" className="btn btn-danger" onClick={removeNote}>
        &times;
      </button>
    </li>
  );
};
