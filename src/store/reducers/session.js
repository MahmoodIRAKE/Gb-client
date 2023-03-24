// types
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "api/api";

// thunks

export const fetchSessions = createAsyncThunk(
  "session/fetchSessions",
  async () => {
    try {
      const response = await api.get("/session");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const SessionPOST = createAsyncThunk(
  "session/SessionPOST",
  async (data) => {
    try {
      const response = await api.post("/session", data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

// initial state
const initialState = {
  session: null,
};

// ==============================|| SLICE - MENU ||============================== //

const session = createSlice({
  name: "session",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchSessions.fulfilled, (state, action) => {
      // Add user to the state array
      state.session = action.payload;
    });
    builder.addCase(SessionPOST.fulfilled, (state, action) => {
      // Add user to the state array
    });
  },
});

export default session.reducer;

export const {} = session.actions;
