import { combineReducers } from 'redux';
import todos from './todosReducer/todos';
import filter from './filterReducer/filter';

const rootReducer = combineReducers({ todos, filter });

export default rootReducer;
