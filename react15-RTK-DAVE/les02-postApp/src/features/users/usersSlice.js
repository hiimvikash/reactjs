import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Vikash Gupta' },
    { id: '1', name: 'Ashish Gupta' },
    { id: '2', name: 'Dave Gray' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.uus;

export default usersSlice.reducer;