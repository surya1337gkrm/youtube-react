import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return data;
});

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [],
    users: [],
  },
  reducers: {
    addMessages: (state, action) => {
        state.messages.splice(10,1)
      state.messages.unshift(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload.map((user) => user.username);
    });
  },
});
export const { addMessages } = chatSlice.actions;
export default chatSlice.reducer;
