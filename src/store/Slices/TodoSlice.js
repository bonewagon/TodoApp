import { createSlice } from '@reduxjs/toolkit';
import { load } from 'redux-localstorage-simple';

let NOTES = load({ namespace: 'todo-app_todos' });

if (!NOTES) {
  NOTES = [];
}

const TodoSlice = createSlice({
  name: 'todo',
  initialState: NOTES,
  reducers: {
    addNote: {
      // reducer: (state, action) => {
      //   state.push(action.payload);
      // },
      // prepare: (id, text, isCompleted) => {
      //   return { payload: { id, text, isCompleted } };
      // },
      reducer: (state, action) => {
        state.push(action.payload);
      },
    },
    removeNote: (state, action) => {
      return state.filter((note) => note.id !== action.payload);
    },
    completeNote: (state, action) => {
      state = state.map((note) => {
        if (note.id === action.payload) {
          note.isCompleted = !note.isCompleted;
        }
        return note;
      });
    },
  },
});

export const { addNote, removeNote, completeNote } = TodoSlice.actions;
export default TodoSlice.reducer;
