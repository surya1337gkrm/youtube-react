import { configureStore } from '@reduxjs/toolkit';
import appSliceReducer from './appSlice';
import searchSlice from './searchSlice';

const store = configureStore({
  reducer: { app: appSliceReducer, search: searchSlice },
});

export default store;
