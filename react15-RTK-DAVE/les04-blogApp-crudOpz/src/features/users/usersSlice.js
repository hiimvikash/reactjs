import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetch(USERS_URL);
    return response.json();
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload; // this will replace initialstate
        })
    }
})

export const selectAllUsers = (state) => state.uus;
export const selectUserById = (state, userId) => state.uus.find(user => user.id === userId)

export default usersSlice.reducer;