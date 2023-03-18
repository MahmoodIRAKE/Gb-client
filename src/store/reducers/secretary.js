// types
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllSecretaries } from 'store/secretary/secretaryService';
import { api } from 'api/api';
// thunks

export const fetchSecretaries = createAsyncThunk('secretary/fetchSecretaries', async () => {
    const response = await api.get('/secretary');
    return response.data;
});

// initial state
const initialState = {
    secretary: null
};

// ==============================|| SLICE - MENU ||============================== //

const secretary = createSlice({
    name: 'secretary',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchSecretaries.fulfilled, (state, action) => {
            // Add user to the state array
            state.secretary = action.payload;
        });
    }
});

export default secretary.reducer;

export const {} = secretary.actions;
