import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
    loading : false,
    users : [],
    error : ""
}
export const fetchUser = createAsyncThunk("fetchme", async ()=>{ // "fetchme" can be anything it is used as a actionType prefix while
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
})
const userSlice = createSlice({
    name : "user",
    initialState,
    extraReducers : (builder)=>{
        
        builder.addCase('fetchme/pending', (state)=>{
            state.loading = true;
        }),
        builder.addCase('fetchme/rejected', (state, action)=>{
            state.loading = false;
            console.log(action.payload)
            state.error = "404 not fetched"
        }),
        builder.addCase(fetchUser.fulfilled, (state, action)=>{
            console.log(action.type) // fetchme/fulfilled
            state.loading = false;
            state.users = action.payload
        })
    }
})
export default userSlice.reducer