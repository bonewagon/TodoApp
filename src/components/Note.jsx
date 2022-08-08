import React from 'react';

import { useDispatch } from 'react-redux';

import { removeNote, completeNote } from '../store/Slices/TodoSlice';

export function Note({ note, id }) {
  const dispatch = useDispatch();

  return (
    <li className="list-group-item note-item" onClick={() => dispatch(completeNote(note.id))}>
      <div className={note.isCompleted ? 'note completed' : 'note'}>
        <strong>{note.text}</strong>
        <small>{new Date().toLocaleDateString()}</small>
      </div>

      <button type="button" className="btn btn-danger" onClick={() => dispatch(removeNote(id))}>
        &times;
      </button>
    </li>
  );
}
