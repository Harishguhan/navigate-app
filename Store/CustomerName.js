import { createSlice } from "@reduxjs/toolkit";

const NameSlice = createSlice({
  name: "customername",
  initialState: {
    todo: [],
    userDetails:[],
  },
  reducers: {
    addName: (state, action) => {
      const { name, id } = action.payload;
      state.todo.push({ id, name });
    },
    deleteName: (state, action) => {
      state.todo.splice(state.todo.indexOf(action.payload), 1);
    },
    addUserDetails:(state,action) => {
      state.userDetails.push(action.payload);
    }
  },
});

export const { addName, deleteName,addUserDetails } = NameSlice.actions;

export default NameSlice.reducer;
