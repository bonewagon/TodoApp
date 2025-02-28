import { createSlice } from '@reduxjs/toolkit';
import { NEWEST, OLDEST } from '../../utils/constants';

const initialState = localStorage.getItem('sort') || NEWEST;

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        sortByNewest() {
            return NEWEST;
        },
        sortByOldest() {
            return OLDEST;
        },
    },
});

export const { sortByNewest, sortByOldest } = sortSlice.actions;
export default sortSlice.reducer;
