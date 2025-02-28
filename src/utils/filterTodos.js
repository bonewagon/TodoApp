import { ACTIVE, COMPLITED } from './constants';

export const filterTodos = (todos, filter) => {
    switch (filter) {
        case ACTIVE:
            return todos.filter((todo) => !todo.isComplited);
        case COMPLITED:
            return todos.filter((todo) => todo.isComplited);
        default:
            return todos;
    }
};
