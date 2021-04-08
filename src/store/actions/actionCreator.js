import { ADD_NOTE, REMOVE_NOTE, COMPLETE_NOTE } from './../constants';

export const addNote = (id, text, isCompleted) => ({
  type: ADD_NOTE,
  id,
  text,
  isCompleted,
});

export const removeNote = (id) => ({
  type: REMOVE_NOTE,
  id,
});

export const completeNote = (id) => ({
  type: COMPLETE_NOTE,
  id,
});
