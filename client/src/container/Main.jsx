import { BrowserRouter } from "react-router-dom";
import AllRoutes from "../Routes/AllRoutes";
import Header from "../components/Header";
import React, { Fragment, useReducer } from 'react';
import { useState } from "react";


const Main = () => {
    
    const [ user, setUser ] = useState(null);
    const [ isLogedIn, setIsLogedIn ] = useState(false);
    
    const handleLogin = (  ) => {
        setIsLogedIn(true)
    }

    const handleLogout = ( ) => {
        setIsLogedIn(false)
    }

    console.log(isLogedIn,"main")
    return (
        <div>
            <BrowserRouter>
                <Header isLogedIn={isLogedIn} handleLogout={handleLogout} />
                <AllRoutes isLogedIn={isLogedIn} handleLogin={handleLogin} />

            </BrowserRouter>
        </div>
    )
}

export default Main;