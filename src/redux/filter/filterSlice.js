import { createSlice } from '@reduxjs/toolkit';

import { ALL } from '../../utils/constants';

const initialState = localStorage.getItem('filter') || ALL;

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterChange(_, action) {
            return action.payload;
        },
    },
});

export const { filterChange } = filterSlice.actions;
export default filterSlice.reducer;
