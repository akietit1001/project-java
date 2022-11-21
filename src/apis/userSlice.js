import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from './useApi';

export const signIn = createAsyncThunk(
    'user/signIn',
    async(payload) => {
        const response = await userApi.signIn(payload);
        // Save access token to storage
        const access_token = response.data.access_token;
        const accessToken = `${access_token}`;
        localStorage.setItem('access_token', accessToken);
        localStorage.setItem('success', response.success);
        localStorage.setItem('data', JSON.stringify(response.data));
        return response.data;
    }
);



// ---------------------
//      MAIN SLICE
// ---------------------
const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: {},
    },
    reducers: {},
    extraReducers: {
        [signIn.fulfilled]: (state, action) => {
            state.current = action.payload || {};
        },
    }
});


const { reducer: userReducer } = userSlice;
export default userReducer;