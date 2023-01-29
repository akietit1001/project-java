import { createSlice } from '@reduxjs/toolkit';

const userReducer = createSlice({
    name: 'user',
    initialState: {
        isLogged: false,
        id: null,
        email: null,
        address: null,
        firstname: null,
        lastname: null,
        phonenumber: null,
        birth_day: null,
        genDer: null,
        occupation: null,
        accessToken: null,
        refreshToken: null,
    },
    reducers: {
        signIn: (state, action) => {
            return {
                isLogged: true,
                ...state,
                ...action.payload,
            }
        },
        refreshToken: (state, action) => {
            return {
                ...action.payload
            }
        },
        signOut: (state, action) => {
            return {
                ...state
            }
        }
    }
})

export const { signIn, signOut, refreshToken } = userReducer.actions
export default userReducer.reducer;