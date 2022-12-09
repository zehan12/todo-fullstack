const Todo = ( { todo } ) => {
    return (
        <div className="flex flex-wrap">
            {
                todo.map((v)=>(
                    <div className="m-3 p-4 rounded shadow-[20px 20px 60px #a7c0b3 -20px -20px 60px #e3fff2]">
                        <h1>title:{v.title}</h1>
                        <h2>description:{v.description}</h2>
                        <h3>id:{v.id}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default Todo;