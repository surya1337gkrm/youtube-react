import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchData: {},
  },
  reducers: {
    addSearch: (state, action) => {
      console.log(state);
      state.searchData = { ...state.searchData, ...action.payload };
    },
  },
});
export const { addSearch } = searchSlice.actions;
export default searchSlice.reducer;
