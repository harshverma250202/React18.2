import { createSlice } from "@reduxjs/toolkit";

export const SnackbarType = {
  SUCCESS: 'success',
  ERROR: 'error',
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState: {
    isOpen: false,
    type: "error",
    message: "",
  },
  reducers: {
    close(state) {
      state.isOpen = false;
    },
    open(state, action) {
      state.isOpen = true;
      state.type = action.payload.type;
      state.message = action.payload.message;
    },
  },
});

// Actions
export const snackbarSliceActions = snackbarSlice.actions;

// Reducer
const snackbarReducer = snackbarSlice.reducer;
export default snackbarReducer;
