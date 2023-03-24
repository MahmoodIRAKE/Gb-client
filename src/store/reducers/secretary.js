// types
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllSecretaries } from "store/secretary/secretaryService";
import { api } from "api/api";

// thunks

export const fetchSecretaries = createAsyncThunk(
  "secretary/fetchSecretaries",
  async () => {
    try {
      const response = await api.get("/secretary");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const SecretaryPOST = createAsyncThunk(
  "secretary/SecretaryPOST",
  async (data) => {
    try {
      const response = await api.post("/secretary", data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

// initial state
const initialState = {
  secretary: null,
};

// ==============================|| SLICE - MENU ||============================== //

const secretary = createSlice({
  name: "secretary",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchSecretaries.fulfilled, (state, action) => {
      // Add user to the state array
      state.secretary = action.payload;
      console.log(state);
    });
    builder.addCase(SecretaryPOST.fulfilled, (state, action) => {
      // Add user to the state array
    });
  },
});

export default secretary.reducer;

export const {} = secretary.actions;
