import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";


const AllRoutes = ({ handleLogin, isLogedIn }) => {

    console.log(isLogedIn,"allroutes")
    return (
        <div>
            {/* header */}
            <Routes>
                <Route
                    path="/"
                    element={isLogedIn ? <Home isLoginIn={isLogedIn} /> : <Navigate to="/signin" />  }
                />
                <Route
                    path="/signin"
                    element={
                        <SignIn
                            isLoginIn={isLogedIn}
                            handleLogin={handleLogin}
                        />}
                />
            </Routes>
        </div>
    )
}

export default AllRoutes;