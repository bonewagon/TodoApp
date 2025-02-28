import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.push(action.payload);
        },
        completeTodo(state, action) {
            state = state.map((todo) => {
                if (todo.id === action.payload) {
                    todo.isComplited = !todo.isComplited;
                }
            });
        },
        removeTodo(state, action) {
            return state.filter((todo) => todo.id !== action.payload);
        },
    },
});

export const { addTodo, completeTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
