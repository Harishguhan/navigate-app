import { createSlice } from "@reduxjs/toolkit";

const NameSlice = createSlice({
  name: "customername",
  initialState: [],
  reducers: {
    addName: (state, action) => {
      const { name, id } = action.payload;
      state.push({ id, name, completed: false });
    },
    deleteName: (state, action) => {
     state.splice(state.indexOf(action.payload),1)
    },
  },
});

export const { addName, deleteName } = NameSlice.actions;

export default NameSlice.reducer;
