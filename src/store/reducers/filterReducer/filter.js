import { CHANGE_FILTER } from '../../constants';
import { load } from 'redux-localstorage-simple';

let NOTES = load({ namespace: 'todo-app' });

if (!NOTES || !NOTES.filter) {
  NOTES = {
    filter: 'all',
  };
}

const filter = (state = NOTES.filter, { type, filter }) => {
  switch (type) {
    case CHANGE_FILTER:
      return filter;
    default:
      return state;
  }
};

export default filter;
