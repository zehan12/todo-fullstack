import { Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { StateContext } from "../store/UserContextReducer";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";


const AllRoutes = () => {
    const { state: { isLoggedIn } } = useContext(StateContext);
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={isLoggedIn ? <Home /> : <Navigate to="/signin" />}
                />
                <Route
                    path="/signin"
                    element={<SignIn />}
                />
            </Routes>
        </div>
    )
}

export default AllRoutes;