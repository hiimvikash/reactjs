const createSlice = require('@reduxjs/toolkit').createSlice;

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
    }
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;