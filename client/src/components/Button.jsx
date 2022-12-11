const Button = ( { handleFunction } ) => {
    return(
        <button onClick={()=>handleFunction()}
        className="inline-block h-auto m-4 p-2 border-none font-semibold text-xl capitalize cursor-pointer overflow-hidden bg-gray-300 hover:bg-gray-400"
        >
            Add Todo
        </button>
    )
}

export default Button;