const redux = require('redux')
const reduxLogger = require('redux-logger')
const applyMiddleware = redux.applyMiddleware

// create initial state of your store(shop)
const cakeinitialState = {
    numOfCakes : 10
}
const icreaminitialState = {
    numOfIcream : 20
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
function ordericream(n=1){
    return {
        type : 'ICREAM_ORDERED',
        quantity : n
    }
}
function restockicream(n=1){
  return {
        type : 'ICREAM_RESTOCKED',
        quantity : n
    }
}

// create reducer : is like a cake shopkeeper
const cakereducer = (state = cakeinitialState, action)=>{
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
// create reducer : is like a icecream shopkeeper
const icreamreducer = (state = icreaminitialState, action)=>{
    switch(action.type){
        case 'ICREAM_ORDERED' : return {
            ...state, 
            numOfIcream : state.numOfIcream - action.quantity
        }

        case 'ICREAM_RESTOCKED' : return {
          ...state, 
          numOfIcream : state.numOfIcream + action.quantity
        }
        default : return state
    }
}

// combine reducer coz we can pass 1 reducer in store
const rootreducer = redux.combineReducers({
  cake : cakereducer,
  icecream : icreamreducer
})

// create store
const logger = reduxLogger.createLogger();
const store = redux.createStore(rootreducer, applyMiddleware(logger));

console.log("Initial State", store.getState());

// this function runs whenever state is updated basically you're subscribed and you will get an update
// and returns a function which is when called then you unsubscribe.
const unsubscribe = store.subscribe(()=>{
    // console.log("Updated State", store.getState().cake)
})

// store.dispatch(orderCake(2));
// store.dispatch(orderCake());
// store.dispatch(orderCake(3));
// store.dispatch(restockCake(3));
const actions = redux.bindActionCreators({ orderCake, restockCake, ordericream, restockicream}, store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(3)

actions.restockicream()
actions.ordericream()
actions.ordericream()
actions.ordericream(2)

unsubscribe();