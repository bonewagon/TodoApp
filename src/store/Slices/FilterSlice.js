import { createSlice } from '@reduxjs/toolkit';
import { load } from 'redux-localstorage-simple';

let NOTES = load({ namespace: 'todo-app_filter' });

if (!NOTES) {
  NOTES = {
    filter: 'all',
  };
}

const FilterSlice = createSlice({
  name: 'filter',
  initialState: NOTES,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { changeFilter } = FilterSlice.actions;
export default FilterSlice.reducer;
