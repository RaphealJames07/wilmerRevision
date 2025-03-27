import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: {},
    userToken: "",
    address:[],
};

const features = createSlice({
    name: "wilmer-revision",
    initialState,
    reducers: {
        saveUserData: (state, {payload}) => {
            state.user = payload.user;
            console.log("User Data:", payload);
        },
        saveAddress: (state, {payload}) => {
            state.address = payload;
            console.log("Address:", payload);
        },
        loginToken: (state, {payload}) => {
            state.userToken = payload;
            console.log("User Token:", payload);
        },
        logout: (state) => {
            state.user = {};
            state.userToken = "";
        },
    },
});

export const {saveUserData, logout, loginToken,saveAddress} = features.actions;

export default features.reducer;
