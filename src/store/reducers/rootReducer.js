import { combineReducers } from 'redux';
import todos from './todosReducer/todos';

const rootReducer = combineReducers({ todos });

export default rootReducer;
