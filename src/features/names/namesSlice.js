import { createSlice } from '@reduxjs/toolkit';

const namesSlice = createSlice({
  name: 'names',
  initialState: [],
  reducers: {
    addName: (state, action) => {
      state.push(action.payload);
    },
    editName: (state, action) => {
      const { index, newName } = action.payload;
      state[index] = newName;
    },
    deleteName: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { addName, editName, deleteName } = namesSlice.actions;
export default namesSlice.reducer;
