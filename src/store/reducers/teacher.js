// types
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { getAllSecretaries } from 'store/secretary/secretaryService';
import { api } from "api/api";

// thunks

export const fetchTeachers = createAsyncThunk(
  "teacher/fetchTeachers",
  async () => {
    const response = await api.get("/teacher");
    console.log("te", response.data);
    return response.data;
  }
);

export const TeacherPOST = createAsyncThunk(
  "teacher/TeacherPOST",
  async (data) => {
    try {
      const response = await api.post("/teacher", data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

// initial state
const initialState = {
  teacher: null,
};

// ==============================|| SLICE - MENU ||============================== //

const teacher = createSlice({
  name: "teacher",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchTeachers.fulfilled, (state, action) => {
      // Add user to the state array
      state.teacher = action.payload;
    });
    builder.addCase(TeacherPOST.fulfilled, (state, action) => {
      // Add user to the state array
    });
  },
});

export default teacher.reducer;

export const {} = teacher.actions;
