// types
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { getAllSecretaries } from 'store/secretary/secretaryService';
import { api } from 'api/api';

// thunks

// export const fetchSecretaries = createAsyncThunk('secretary/fetchSecretaries', async () => {
//     const response = await api.get('/secretary');
//     return response.data;
// });

export const SubjectPOST = createAsyncThunk('subject/SubjectPOST', async (data) => {
    try {
        // const response = await api.post('/subject', data);
        console.log(data);
        // return response.data;
        return data;
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
        // builder.addCase(fetchSecretaries.fulfilled, (state, action) => {
        //     // Add user to the state array
        //     state.secretary = action.payload;
        // });
        builder.addCase(SubjectPOST.fulfilled, (state, action) => {
            // Add user to the state array
        });
    }
});

export default subject.reducer;

export const {} = subject.actions;
