import cancelIcon from '../assets/clear.svg';

import { useDispatch } from 'react-redux';
import { completeTodo, removeTodo } from '../redux/todos/todosSlice';

const TodoItem = ({ id, text, date, isComplited }) => {
    const dispatch = useDispatch();

    const onTodoClickHandler = () => {
        dispatch(completeTodo(id));
    };

    const onDeleteClickHandler = () => {
        dispatch(removeTodo(id));
    };

    return (
        <li className="todoItem">
            <p className={isComplited ? 'todoItem--note note--complited' : 'todoItem--note'} onClick={onTodoClickHandler}>
                {text}
            </p>
            <div>
                <p className="todoItem--time">{date}</p>
                <button className="todoItem--deleteButton" onClick={onDeleteClickHandler}>
                    <img src={cancelIcon} alt="" />
                </button>
            </div>
        </li>
    );
};

export default TodoItem;
