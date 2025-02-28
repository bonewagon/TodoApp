import { filterTodos } from './filterTodos';
import { NEWEST } from './constants';

export const useTodos = (todos, sortParam, activeFilter, currentPage) => {
    const filteredTodos = filterTodos(todos, activeFilter);
    const sortedTodos = sortParam === NEWEST ? [...filteredTodos].sort((a, b) => b.id - a.id) : [...filteredTodos].sort((a, b) => a.id - b.id);

    const todosPerPage = filteredTodos.length > 12 ? 11 : 12;
    const totalPages = Math.ceil(filteredTodos.length / todosPerPage) || 1;

    const todosOnPage = sortedTodos.slice((currentPage - 1) * todosPerPage, (currentPage - 1) * todosPerPage + todosPerPage);

    return { todosOnPage, totalPages, filteredTodos };
};
