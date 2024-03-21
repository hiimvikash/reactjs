import { configureStore } from "@reduxjs/toolkit";

import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from '../features/icecream/icecreamSlice'
import userReducer from '../features/user/userSlice'

const store = configureStore({
    reducer :{
        cak : cakeReducer,
        ice : icecreamReducer,
        use : userReducer
    }
});
export default store;