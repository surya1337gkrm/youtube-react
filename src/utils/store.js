import { configureStore } from '@reduxjs/toolkit';
import appSliceReducer from './appSlice';
import chatSlice from './chatSlice';
import searchSlice from './searchSlice';

const store = configureStore({
  reducer: { app: appSliceReducer, search: searchSlice, chat: chatSlice },
});

export default store;
