import { createSlice } from '@reduxjs/toolkit';

const initialState = +localStorage.getItem('currentPage') || 1;

const currentPageSlice = createSlice({
    name: 'currentPage',
    initialState,
    reducers: {
        changeCurrentPage(_, action) {
            return action.payload;
        },
    },
});

export const { changeCurrentPage } = currentPageSlice.actions;
export default currentPageSlice.reducer;
