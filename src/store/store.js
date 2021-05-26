import { createStore, applyMiddleware } from 'redux';
import { save } from 'redux-localstorage-simple';
import rootReducer from './reducers/rootReducer';

const store = createStore(
  rootReducer,
  applyMiddleware(save({ namespace: 'todo-app' }))
);

export default store;
