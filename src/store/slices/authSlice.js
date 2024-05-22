/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { snackbarSliceActions } from "./snackbarSlice";
import { register } from "../../api/authApi";
import axios from "axios";

const getIntialState = () => {
  // First try reading the initial state
  let token = localStorage.getItem("authToken") ?? null;
  if (token != null) {
    token = JSON.parse(token);
  }
  return {
    user: null,
    token,
    loaders: {
      registerLoading: false,
    },
  };
};

export const getUserInfoThunk = createAsyncThunk(
  "auth/getUserInfo",
  async () => {
    const r = "";
    //  = await register({}).catch((error) => {
    //   console.error(error?.response);
    // });
    return r;
  }
);

// Slice
const supplyAuthSlice = createSlice({
  name: "Auth",
  initialState: getIntialState(),
  reducers: {
    logout(state) {
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserInfoThunk.fulfilled, (state, { payload }) => {
      // state.loaders.getUserInfoLoading = false;
      state.user = payload ?? null;
    });
    builder.addCase(getUserInfoThunk.pending, (state) => {
      // state.loaders.getUserInfoLoading = true;
    });
    builder.addCase(getUserInfoThunk.rejected, (state) => {
      // state.loaders.getUserInfoLoading = false;
    });
  },
});

// Actions
export const supplyAuthActions = supplyAuthSlice.actions;

// Reducer
const supplyAuthReducer = supplyAuthSlice.reducer;
export default supplyAuthReducer;
