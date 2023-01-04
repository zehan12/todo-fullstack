import React, { useState, useEffect, Fragment } from 'react';
import { Token, BASE_URL } from '../utils/constant';

function Modal({ isOpen, handleOpen }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (event) => {
<<<<<<< HEAD
        // const { token } = JSON.parse(localStorage["user_token"])
        const Token  = localStorage["user_token"] ? localStorage["user_token"] : "";

        event.preventDefault();
        // console.log(title, description, token);
=======
        event.preventDefault();
        console.log(title, description, Token);
>>>>>>> cd19febd9bf59a9cb4f9feeb668962fcc365f380
        const res = await fetch(BASE_URL + "/todo", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                authorization: Token
            },
            body: JSON.stringify({ title, description })
        })
        const data = await res.json();
        // console.log(data);
        handleOpen(true)

    }

    return (
        <Fragment>
            {
                isOpen &&
                < div className='bg-black bg-opacity-50 flex justify-center h-screen opacity-100 fixed w-screen' >

                    <div className=" px-4 pt-5 pb-4  text-left align-bottom transition-all transform h-2/4 rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle"
                    >
                        <h3 className="text-4xl font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
                            Add Task
                        </h3>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                            Here the todo app
                        </p>

                        <form className="mt-4" action="#" />
                        <label className="text-2xl text-gray-700 dark:text-gray-200">
                            Title
                        </label>

                        <label className="block my-3">
                            <input
                                onChange={(e) => setTitle(e.target.value)}
                                type="text" name="title" placeholder="Enter the title" value={title} className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                        </label>

                        <label className="text-2xl mt-2 text-gray-700 dark:text-gray-200">
                            Description
                        </label>
                        <label className="block my-3">
                            <input
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                                type="text" name="description" placeholder="Enter your description" className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                        </label>

                        <div className="my-10 sm:flex sm:items-center sm:-mx-2">
                            <button type="button" onClick={() => handleOpen(false)} className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                                Cancel
                            </button>

                            <button
                                onClick={(e) => handleSubmit(e)}
                                type="button" className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                                Add
                            </button>
                        </div>
                    </div>
                </div >
            }
        </Fragment>)
}

export default Modal;



