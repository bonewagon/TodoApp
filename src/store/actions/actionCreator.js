import {
  ADD_NOTE,
  REMOVE_NOTE,
  COMPLETE_NOTE,
  CHANGE_FILTER,
} from './../constants';

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

export const changeFilter = (activeFilter) => ({
  type: CHANGE_FILTER,
  filter: activeFilter,
});
