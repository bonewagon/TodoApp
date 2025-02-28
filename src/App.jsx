import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from './components/Header';
import Form from './components/Form';
import Sort from './components/Sort';
import TodoItem from './components/TodoItem';
import Pagination from './components/Pagination';
import EmptyTodos from './components/EmptyTodos';
import Footer from './components/Footer';

import { changeCurrentPage } from './redux/currentPage/currentPageSlice';
import { useTodos } from './utils/useTodos';

const App = () => {
    const isMounted = useRef(false);
    const todos = useSelector((state) => state.todos);
    const sortParam = useSelector((state) => state.sort);
    const activeFilter = useSelector((state) => state.filter);
    const currentPage = useSelector((state) => state.currentPage);

    const dispatch = useDispatch();

    useEffect(() => {
        if (isMounted.current) {
            localStorage.setItem('todos', JSON.stringify(todos));
            localStorage.setItem('sort', sortParam);
            localStorage.setItem('filter', activeFilter);
            localStorage.setItem('currentPage', currentPage);
        }
        isMounted.current = true;
    }, [todos, sortParam, activeFilter, currentPage]);

    const { todosOnPage, totalPages, filteredTodos } = useTodos(todos, sortParam, activeFilter, currentPage);

    const handlePageChange = (page) => {
        dispatch(changeCurrentPage(page));
    };

    if (currentPage > totalPages) {
        dispatch(changeCurrentPage(totalPages));
    }

    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <div className="main--params">
                        <Form />
                        <Sort />
                    </div>
                    <div className="main--todoList">
                        {filteredTodos.length ? (
                            <ul className="todoContainer">
                                {todosOnPage.map(({ id, text, date, isComplited }) => (
                                    <TodoItem key={id} id={id} text={text} date={date} isComplited={isComplited} />
                                ))}
                            </ul>
                        ) : (
                            <EmptyTodos />
                        )}
                    </div>
                </div>
                {totalPages > 1 && <Pagination totalPages={totalPages} onPageChange={handlePageChange} />}
            </main>
            <Footer todosAmount={filteredTodos.length} />
        </>
    );
};

export default App;
