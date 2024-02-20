import { createSlice } from "@reduxjs/toolkit";
import {ordered as orderCake} from '../cake/cakeSlice'
const initialState = {
    numOfIcecreams : 20
}
const icecreamSlice = createSlice({
    name : "icecream",
    initialState,
    reducers : {
        ordered(state, action){
            state.numOfIcecreams -= action.payload
        }, 
        restocked(state, action){
            state.numOfIcecreams += action.payload
        }
    },
    extraReducers : (builder) => {
        builder.addCase(orderCake, (state)=>{ // can give action type as "cake/ordered", here orderCake is a actionCreator
            state.numOfIcecreams--
        })
    }
})

export default icecreamSlice.reducer;
export const {ordered, restocked} = icecreamSlice.actions;