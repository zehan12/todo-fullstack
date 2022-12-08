const Button = ( { handleSubmit } ) => {
    return(
        <button onClick={(e)=>handleSubmit(e)}>
            submit
        </button>
    )
}

export default Button;