import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAsyncUsers = createAsyncThunk('users/fetchAsyncUsers', async () => {
    const response = await axios
        .get(`https://dummyjson.com/users`)
    return response.data;
})

export const fetchAsyncUsersWithID = createAsyncThunk('users/fetchAsyncUsersWithID', async (props) => {
    const response = await axios
        .get(`https://dummyjson.com/users/${props}`);

    return response.data;
})

const initialState = {
    users: [],
    usersWithId: {},
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUsers: (state, action) => {
            state.users.users.push(action.payload)
        },
        deleteUser: (state, action) => {
            console.log("action", action)
            state.users.users = state.users.users.filter((user) => user.id !== action.payload.id)
        }
    },
    extraReducers: {
        [fetchAsyncUsers.fulfilled]: (state, { payload }) => {
            return { ...state, users: payload }
        },
        [fetchAsyncUsers.rejected]: () => {
            console.log("Rejected!");
        },
        [fetchAsyncUsersWithID.fulfilled]: (state, { payload }) => {
            return { ...state, usersWithId: payload }
        },
    }
});

export const { addUsers, deleteUser } = usersSlice.actions;
export const getAllUsers = (state) => state.users.users;
export const getUsersWithId = (state) => state.users.usersWithId;
export default usersSlice.reducer;