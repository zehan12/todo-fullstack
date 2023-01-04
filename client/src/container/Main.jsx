import { BrowserRouter } from "react-router-dom";
import AllRoutes from "../Routes/AllRoutes";
import Header from "../components/Header";
import React, { useReducer, useEffect } from 'react';
import { StateContext, stateReducer, initialState } from "../store/UserContextReducer";
import BASE_URL from "../utils/constant";
import { token } from "morgan";
import { Toaster } from 'react-hot-toast';


const Main = () => {

    const [state, dispatch] = useReducer(stateReducer, initialState);

    // this logic work on reload of app
    const isUserAuthenticate = async (token) => {
        console.log(token, "in main")
        const Token = localStorage.getItem('user_token');


        const res = await fetch(BASE_URL + "/users/get", {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            },
        })
        const data = await res.json();
        console.log(data, "after load")
        if (data.user.token) {
            dispatch({ type: 'LOGIN', payload: { user: data.user } })
        }
    }

    useEffect(() => {
        // console.log(JSON.parse(localStorage.user_token),"value of token")
        if (localStorage.user_token) {
            const token = localStorage["user_token"]
            console.log(token, "function auth")
            isUserAuthenticate(token)
        }

    }, [])





    return (
        <div>
            <BrowserRouter>

                <StateContext.Provider value={{ state, dispatch }}>

                    <Header />

                    <AllRoutes />

                    <Toaster
                        position="top-right"
                        toastOptions={{
                            style: {
                                fontFamily: "sans-serif",
                                fontSize: '14px',
                                fontWeight: "500"
                            },
                        }}
                    />

                </StateContext.Provider>

            </BrowserRouter>
        </div>
    )
}
export default Main