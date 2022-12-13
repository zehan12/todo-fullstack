import { BrowserRouter } from "react-router-dom";
import AllRoutes from "../Routes/AllRoutes";
import Header from "../components/Header";
import React, { useReducer, useEffect } from 'react';
import { StateContext, stateReducer, initialState } from "../store/UserContextReducer";
import { Token, BASE_URL } from "../utils/constant";
import { Toaster } from 'react-hot-toast';


const Main = () => {

    const [state, dispatch] = useReducer(stateReducer, initialState);

    // this logic work on reload of app
    const isUserAuthenticate = async (token) => {
        try {
            const res = await fetch(BASE_URL + "/users/get", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    authorization: token
                }
            })
            const data = await res.json();
            dispatch({ type: 'LOGIN', payload: { user: data.user, token: data.user.token } })
        } catch (error) {
            console.error(error);

        }
    }

    useEffect( () => {
        if (Token) {
            isUserAuthenticate(Token)
        }
    },[])


    console.log(Token)

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