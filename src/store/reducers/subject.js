// types
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { getAllSecretaries } from 'store/secretary/secretaryService';
import { api } from 'api/api';

// thunks

export const fetchSubjects = createAsyncThunk('secretary/fetchSubjects', async () => {
    const response = await api.get('/subjects');
    return response.data;
});

export const SubjectPOST = createAsyncThunk('subject/SubjectPOST', async (data) => {
    try {
        console.log(data)
        const response = await api.post("/subjects", data);
        return response.data;
    } catch (err) {
        console.log(err);
    }
});

// initial state
const initialState = {
    subject: null
};

// ==============================|| SLICE - MENU ||============================== //

const subject = createSlice({
    name: 'subject',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchSubjects.fulfilled, (state, action) => {
            // Add user to the state array
            state.subject = action.payload;
        });
        builder.addCase(SubjectPOST.fulfilled, (state, action) => {
            // Add user to the state array
        });
    }
});

export default subject.reducer;

export const {} = subject.actions;
