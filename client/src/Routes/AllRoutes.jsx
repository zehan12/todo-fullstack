import { Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { StateContext } from "../store/UserContextReducer";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";


const AllRoutes = () => {
    const { state: { isLoggedIn } } = useContext(StateContext);
    console.log(isLoggedIn, "login state")
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={isLoggedIn ? <Home /> : <SignIn />}
                />
                <Route
                    path="/signin"
                    element={<SignIn />}
                />
<<<<<<< HEAD
=======

>>>>>>> cd19febd9bf59a9cb4f9feeb668962fcc365f380
                <Route
                    path="/signup"
                    element={<SignUp />}
                />
            </Routes>
        </div>
    )
}

export default AllRoutes;
