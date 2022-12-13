const TodoFilterNav = () => {
    return (
        <nav aria-label="breadcrumb" className=" p-4 s bg-white text-center w-1/2 mx-auto">
            <ol className="flex justify-center gap-10 h-8 space-x-2 
            dark:text-gray-100 mx-auto ">
                <li className="flex items-center">
                    <a rel="noopener noreferrer" href="#" title="Back to homepage" className="flex text-black items-center hover:underline text-center">All</a>
                </li>
                <li className="flex text-black items-center space-x-1">
                    <span className="dark:text-gray-400">/</span>
                    <a rel="noopener noreferrer" href="#" className="flex text-black items-center px-1 capitalize hover:underline text-center">Active</a>
                </li>
                <li className="flex text-black items-center space-x-1">
                    <span className="dark:text-gray-400">/</span>
                    <a rel="noopener noreferrer" href="#" className="flex text-black items-center px-1 capitalize hover:underline text-center">Completed</a>
                </li>
                <li className="flex text-black items-center space-x-1">
                    <span className="dark:text-gray-400">/</span>
                    <a rel="noopener noreferrer" href="#" className="flex text-black items-center px-1 capitalize hover:underline  cursor-default text-center">Clear Compeleted</a>
                </li>
            </ol>
        </nav>
    )
}

export default TodoFilterNav;