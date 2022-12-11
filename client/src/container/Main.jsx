import { BrowserRouter } from "react-router-dom";
import AllRoutes from "../Routes/AllRoutes";
import Header from "../components/Header";
import React, { useReducer, useEffect } from 'react';
import { StateContext, stateReducer, initialState } from "../store/UserContextReducer";
import BASE_URL from "../utils/constant";




const Main = () => {

    const [state, dispatch] = useReducer(stateReducer, initialState);

    // this logic work on reload of app
    const isUserAuthenticate = async (token, email) => {
        const res = await fetch(BASE_URL + "/users/get", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                authorization: token
            },
            body: JSON.stringify({ email })
        })
        const data = await res.json();
        console.log(data)
        if (data.user.token) {
            let local = {
                email: data.user.email,
                token: data.token
            }
            dispatch({ type: 'LOGIN', payload: { user: data.user, local } })
        }
    }

    useEffect(() => {
        if (localStorage["user_token"] && localStorage["user_token"] !== "undefined" && JSON.parse(localStorage.user_token).token) {
            let local = JSON.parse(localStorage.user_token)
            console.log("user must login", local);
            isUserAuthenticate(local.token, local.email)
        }
    }, [])

    return (
        <div>
            <BrowserRouter>

                <StateContext.Provider value={{ state, dispatch }}>

                    <Header />

                    <AllRoutes />

                </StateContext.Provider>

            </BrowserRouter>
        </div>
    )
}

export default Main;