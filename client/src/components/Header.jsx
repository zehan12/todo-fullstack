import { useContext } from "react";
import { StateContext } from "../store/UserContextReducer";
import { NavLink, useLocation } from "react-router-dom"

const Header = () => {
    const { state: { isLoggedIn } } = useContext(StateContext);
    const { dispatch } = useContext(StateContext);
    const location = useLocation();

    let gradientColor = 'from-green-500 to-green-800';
    if (location.pathname === '/signin') {
      gradientColor = 'from-red-500 to-red-800';
    } else if (location.pathname === '/signup') {
      gradientColor = 'from-blue-500 to-blue-800';
    }

    return (
     <header>
  <div  className={`px-40 flex justify-between align-middle py-4 bg-gradient-to-r ${gradientColor}`}>
    <li className="list-none">
      <strong className="text-white font-bold font-sans font-3xl">Todo App</strong>
      </li>
                <nav>
                    <ul className="flex ml-3">
                        <li>
                        <p>
                    You are currently { isLoggedIn ? 'logged in' : 'logged out'}.
                </p>
                        </li>

                        {
                            isLoggedIn ?
                                <>

                                    <li onClick={() => dispatch({ type: 'LOGOUT' })}
                                        className="text-sm text-black font-bold ml-4 ">

                                        Logout

                                    </li>
                                </>
                                :
                                <>
                                    <li className="text-sm text-gray-400 ml-4 ">
                                        <NavLink style={({ isActive }) => isActive ? { color: "black" } : {}} to="/signin" >Sign In</NavLink>
                                    </li>

                                    <li className="text-sm text-gray-400 ml-4 ">
                                        <NavLink style={({ isActive }) => isActive ? { color: "black" } : {}} to="/signup" >Sign Up</NavLink>
                                    </li>
                                </>



                        }
                    </ul>
                </nav>
            </div>
        </header>)

}

export default Header;