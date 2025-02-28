import { useState, useEffect, useRef } from 'react';

import listIcon from '../assets/list.svg';
import clearIcon from '../assets/clear.svg';

import { addTodo } from '../redux/todos/todosSlice';
import { useDispatch } from 'react-redux';

import { dateTransform } from '../utils/dateTransform';

const Form = () => {
    const dispatch = useDispatch();

    const [value, setValue] = useState('');
    const inputElem = useRef(null);

    useEffect(() => {
        if (inputElem) {
            inputElem.current.focus();
        }
    }, []);

    const inputChangeHandler = (event) => {
        const data = event.target.value;
        setValue(data);
    };

    const clickClearIconHandler = () => {
        setValue('');
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (value) {
            dispatch(addTodo({ id: new Date().getTime(), text: value, date: dateTransform(new Date()), isComplited: false }));
            setValue('');
        }
    };

    return (
        <form className="form" onSubmit={submitHandler}>
            <img src={listIcon} className="listIcon" alt="list-icon" />
            <input ref={inputElem} className="form--input" type="text" value={value} onChange={inputChangeHandler} />
            {value && <img src={clearIcon} className="clearIcon" alt="clear-icon" onClick={clickClearIconHandler} />}
        </form>
    );
};

export default Form;
