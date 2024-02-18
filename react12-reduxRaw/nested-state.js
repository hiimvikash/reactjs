const produce  = require('immer').produce;
const redux = require('redux');


const initialState = {
    name : "Vikash",
    address : {
        street : "425 Main St",
        area : "china town",
        pin : 123456
    }
}

const UPDATE_STREET = "UPDATE_STREET";
const updateStreet = (street) =>{
    return {
        type : UPDATE_STREET,
        payload : street
    }
}

function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_STREET : 
        // return {
        //     ...state,
        //     address:{
        //         ...state.address,
        //         street : action.payload
        //     }
        // }
        return produce(state, (draft)=>{
            draft.address.street = action.payload;
        })
        default : return state
    }

}




const store = redux.createStore(reducer)
console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(()=>{
    console.log("Updated State", store.getState())
})

store.dispatch(updateStreet('325 Main St'));

unsubscribe();