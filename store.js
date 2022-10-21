import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './components/Users/UsersSlice';

export const store = configureStore({
    reducer: {
        users: usersReducer
    },
})