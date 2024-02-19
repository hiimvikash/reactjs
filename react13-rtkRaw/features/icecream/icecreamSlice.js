const createSlice = require('@reduxjs/toolkit').createSlice;
const cakeActions = require("../cake/cakeSlice").cakeActions;

const icecreamSlice = createSlice({
    name : "icecream",
    initialState : {
        numOfIcecreams : 20
    },
    reducers : {
        ordered : (state)=>{
            state.numOfIcecreams--;
        },
        restocked : (state, action)=>{
            state.numOfIcecreams+=action.payload;
        }
    },

    extraReducers : (builder) => {
        builder.addCase(cakeActions.ordered, (state) =>{
            state.numOfIcecreams--
        })
    }
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;