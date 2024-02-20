import { configureStore } from "@reduxjs/toolkit";

import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from '../features/icecream/icecreamSlice'

const store = configureStore({
    reducer :{
        cak : cakeReducer,
        ice : icecreamReducer 
    }
});

export default store;