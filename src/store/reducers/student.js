// types
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "api/api";

// thunks

export const fetchStudents = createAsyncThunk(
  "student/fetchStudents",
  async () => {
    const response = await api.get("/student");
    return response.data;
  }
);

export const StudentPOST = createAsyncThunk(
  "student/StudentPOST",
  async (data) => {
    try {
      const response = await api.post("/student", data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

// initial state
const initialState = {
  student: null,
};

// ==============================|| SLICE - MENU ||============================== //

const student = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchStudents.fulfilled, (state, action) => {
      // Add user to the state array
      state.student = action.payload;
    });
    builder.addCase(StudentPOST.fulfilled, (state, action) => {
      // Add user to the state array
    });
  },
});

export default student.reducer;

export const {} = student.actions;
