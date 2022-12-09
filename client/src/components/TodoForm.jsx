const TodoForm = ( { handleChange, title, description } ) => {
    return(
        <div>
            <input onChange={(e)=>handleChange(e)} type="text" value={title} name="title"  />
            <br />
            <input onChange={(e)=>handleChange(e)} type="text" value={description} name="description" />
        </div>
    )
}

export default TodoForm;