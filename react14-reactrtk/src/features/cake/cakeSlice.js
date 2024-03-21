import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    numOfcakes : 10
}
const cakeSlice = createSlice({
    name : "cake",
    initialState,
    reducers : {
        ordered(state, action){
            state.numOfcakes -= action.payload
        },
        restocked(state, action){
            state.numOfcakes += action.payload
        }
    }
})
export const {ordered, restocked} = cakeSlice.actions
export default cakeSlice.reducer