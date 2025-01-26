 import { configureStore } from "@reduxjs/toolkit";
 import { blogApi } from '../redux/features/blogsApi.js';

import authApi from "./features/Auth/authApi.js";
import authReducer from './features/Auth/authSlice.js'
import commentApi from "./features/commentApi.js";

export const Store = configureStore({
    reducer :{
        [blogApi.reducerPath] : blogApi.reducer,
        [authApi.reducerPath] : authApi.reducer,
        [commentApi.reducerPath] : commentApi.reducer,
        auth : authReducer,
    },
    middleware : (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(blogApi.middleware,authApi.middleware,commentApi.middleware)
 })