import React, { Fragment, useState, useContext, useEffect } from 'react';

// Define the initial state for the `isLoggedIn` value
export const initialState = {
    isLoggedIn: false,
    user: null
};

// Define the context to hold the state
export const StateContext = React.createContext(initialState);

// Define a reducer to handle state updates
export const stateReducer = (state, action) => {
    console.log(action,"action")
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem("user_token",JSON.stringify(action.payload.token))
            return {
                isLoggedIn: true,
                user: action.payload.user
            };
        case 'LOGOUT':
            localStorage.removeItem("user_token")
            return {
                isLoggedIn: false,
                user: null
            };
        default:
            return state;
    }
};