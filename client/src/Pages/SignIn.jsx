import React, { Fragment, useState, useContext } from "react";
import Confetti from "../components/Confetti";
import {BASE_URL} from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../store/UserContextReducer";
// import { initialState } from "../container/Main"

// console.log(BASE_URL)

const SignIn = () => {
    const { state } = useContext(StateContext);
    const { dispatch } = useContext(StateContext);

    // console.log(state)
    const Navigate = useNavigate()
    const [formError, setFormError] = useState([])
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(email, password)
        const res = await fetch(BASE_URL + "/users/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
        const data = await res.json();
        if (data.login) {
            setShow(true)
<<<<<<< HEAD
            dispatch({ type: 'LOGIN', payload: { user:data.user} })
=======
            console.log(data,"time of login")
            dispatch({ type: 'LOGIN', payload: { user:data.user, token: data.user.token } })
>>>>>>> cd19febd9bf59a9cb4f9feeb668962fcc365f380
            setTimeout(() => Navigate("/"), 4000)
        }
        if (data.error) setError(data.error)

        console.log(data)
    }



    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-20">

            <Confetti show={show} />

            <div className="w-full max-w-md space-y-8">
                {
                    error ?

                        <div role="alert" className="rounded border-l-4 border-red-500 bg-red-50 p-4">
                            <strong className="block font-medium text-red-700"> Error Something went wrong ! </strong>

                            <p className="mt-2 text-sm text-red-700">
                                {error}
                            </p>
                        </div> :
                        <div className="bg-white text-white h-20"> {"e"} </div>
                }
                <Fragment>
                    <button
                        onClick={() => dispatch({ type: 'LOGIN', payload: { user: {  } } })}                    >
                        Log In
                    </button>
                    <button
                        onClick={() => dispatch({ type: 'LOGOUT' })}
                    >
                        Log Out
                    </button>
                </Fragment>
                <div>

                    <h2 className="mt-6 text-center text-4xl font-bold tracking-tight text-gray-900">
                        Sign In
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Need an account ?
                        </a>
                    </p>
                </div>
                <form className="mt-8 space-y-6" />
                <div className="-space-y-px rounded-md shadow-sm">
                    <div>
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            name="email"
                            type="email"
                            required
                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            placeholder="Email address"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            name="password"
                            type="password"
                            required
                            className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            placeholder="Password"
                        />
                    </div>
                </div>

                <div>
                    <button
                        onClick={(e) => handleSubmit(e)}
                        type="submit"
                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                        </span>
                        Sign in
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;