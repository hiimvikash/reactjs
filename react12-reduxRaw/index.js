const redux = require('redux')

// create initial state of your store(shop)
const initialState = {
    numOfCakes : 10
}

// create action creator : action is nothing but an object with type property
function orderCake(n=1){
    return {
        type : 'CAKE_ORDERED',
        quantity : n
    }
}
function restockCake(n=1){
  return {
        type : 'CAKE_RESTOCKED',
        quantity : n
    }
}

// create reducer : is like a shopkeeper
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case 'CAKE_ORDERED' : return {
            ...state, 
            numOfCakes : state.numOfCakes - action.quantity
        }

        case 'CAKE_RESTOCKED' : return {
          ...state, 
          numOfCakes : state.numOfCakes + action.quantity
        }
        default : return state
    }
}

// create store
const store = redux.createStore(reducer);

console.log("Initial State", store.getState());

// this function runs whenever state is updated basically you're subscribed and you will get an update
// and returns a function which is when called then you unsubscribe.
const unsubscribe = store.subscribe(()=>{
    console.log("Updated State", store.getState())
})

store.dispatch(orderCake(2));
store.dispatch(orderCake());
store.dispatch(orderCake(3));
store.dispatch(restockCake(3));

unsubscribe();

store.dispatch(orderCake()); // this will not call the subscribe CB on state change
console.log("unsub", store.getState()) 