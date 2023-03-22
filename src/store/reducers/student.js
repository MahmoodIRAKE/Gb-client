// types
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { getAllSecretaries } from 'store/secretary/secretaryService';
import { api } from 'api/api';

// thunks

// export const fetchSecretaries = createAsyncThunk('secretary/fetchSecretaries', async () => {
//     const response = await api.get('/secretary');
//     return response.data;
// });

export const StudentPOST = createAsyncThunk('student/StudentPOST', async (data) => {
    console.log(data);
    try {
        const response = await api.post('/student', data);
        return response.data;
    } catch (err) {
        console.log(err);
    }
});

// initial state
const initialState = {
    student: null
};

// ==============================|| SLICE - MENU ||============================== //

const student = createSlice({
    name: 'student',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        // builder.addCase(fetchSecretaries.fulfilled, (state, action) => {
        //     // Add user to the state array
        //     state.secretary = action.payload;
        // });
        builder.addCase(StudentPOST.fulfilled, (state, action) => {
            // Add user to the state array
        });
    }
});

export default student.reducer;

export const {} = student.actions;
