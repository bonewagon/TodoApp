import { configureStore } from '@reduxjs/toolkit';
import { save } from 'redux-localstorage-simple';

import todos from './Slices/TodoSlice';
import filter from './Slices/FilterSlice';

const store = configureStore({
  reducer: { todos, filter },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      save({ states: ['todos'], namespace: 'todo-app' }),
      save({ states: ['filter'], namespace: 'todo-app' }),
    ),
});

export default store;
