import { configureStore } from "@reduxjs/toolkit";
import apiReducer from '../redux/apiSlice'
import {apiSlice} from "../redux/apiSlice";

const store = configureStore({
    reducer :{
        [apiSlice.reducerPath] : apiReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
});
export default store;