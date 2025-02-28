import { configureStore } from '@reduxjs/toolkit';

import todos from './todos/todosSlice';
import sort from './sort/sortSlice';
import filter from './filter/filterSlice';
import currentPage from './currentPage/currentPageSlice';

export const store = configureStore({
    reducer: {
        todos,
        sort,
        filter,
        currentPage,
    },
});
