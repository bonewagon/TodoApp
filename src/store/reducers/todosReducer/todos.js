import { ADD_NOTE, REMOVE_NOTE, COMPLETE_NOTE } from './../../constants';
import { load } from 'redux-localstorage-simple';

let NOTES = load({ namespace: 'todo-app' });

if (!NOTES || !NOTES.todos || !NOTES.todos.length) {
  NOTES = {
    todos: [],
  };
}

const todos = (state = NOTES.todos, { type, id, text, isCompleted }) => {
  switch (type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          id,
          text,
          isCompleted,
        },
      ];

    case REMOVE_NOTE:
      return [...state].filter((note) => note.id !== id);

    case COMPLETE_NOTE:
      return [...state].map((note) => {
        if (note.id === id) {
          note.isCompleted = !note.isCompleted;
        }
        return note;
      });

    default:
      return state;
  }
};

export default todos;
