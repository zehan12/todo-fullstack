import { useState } from "react";
import { Fragment } from "react"
import { BASE_URL } from "../utils/constant";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    const Navigate = useNavigate()    
    const initialFormState = {
        name:"",
        email:"",
        password:"",
    }

    const [ formData, setFormData ] = useState(initialFormState)

    const handleChange = ( { target } ) => {
        const { name, value } = target;
        setFormData({ ...formData,[name]:value.toLowerCase() })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
       const { name, email, password } = formData;
        console.log(name,email,password)
        const res = await fetch(BASE_URL+"/users/signup",{
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        });
        const data = await res.json();
        if ( data.login ) {

        }
        console.log(data,"data")
    }
    return (
        <Fragment>
            <div className="flex min-h-full flex-col 
            mt-20 justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">

                    <h2 className="mt-6 text-center text-3xl 
                 font-bold tracking-tight text-gray-900">Sign Up</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Have an account?
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Log in now
                        </a>
                    </p>
                </div>


                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">


                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Name                                </label>
                            <div className="mt-1">
                                <input
                                    onChange={(e) => handleChange(e)}
                                    value={formData.name}
                                    name="name"
                                    type="name"
                                    autoComplete="name"
                                    required
                                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm  mt-4 font-medium text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    onChange={(e) => handleChange(e)}
                                    value={formData.email}
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm  mt-4 font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    onChange={(e) => handleChange(e)}
                                    value={formData.password}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        {/* <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div> */}

                        <div>
                            <button
                                onClick={(e) => handleSubmit(e)}
                                type="submit"
                                className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 mt-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Sign Up
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SignUp;