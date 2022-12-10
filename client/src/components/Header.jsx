import { NavLink } from "react-router-dom"
const Header = ({ isLogedIn, handleLogout }) => {
    return (
        <header>
            <div className="container flex justify-between align-middle py-4 sm:bg-red-200 md:bg-purple-300 lg:bg-white">
                <li className="list-none">
                    <strong className="text-green-500 font-bold	 font-sans text-2xl">Todo</strong>
                </li>
                <nav>
                    <ul className="flex ml-3">

                        {
                            isLogedIn ?
                                <>

                                    <li onClick={handleLogout} className="text-sm text-black font-bold ml-4 ">
                                        
                                          Logout
                                       
                                    </li>
                                </>
                                :
                                <>
                                    <li className="text-sm text-gray-400 ml-4 ">
                                        <NavLink activeClassName='text-black' to="/signin" >Sign In</NavLink>
                                    </li>

                                    <li className="text-sm text-gray-400 ml-4 ">
                                        <NavLink activeClassName='text-black' to="/signup" >Sign Up</NavLink>
                                    </li>
                                </>



                        }
                    </ul>
                </nav>
            </div>
        </header>)

}

export default Header;