import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import goalsService from "./goalService";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ""
};

export const goalSlice = createSlice({
  name: "goal",
  initialState,
  reducers: {
    reset: (state) => initialState
  }
});

export const { reset } = goalSlice.actions;
export default goalSlice.reducer;
