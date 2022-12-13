import TodoItems from "./TodoItems";

const Todo = ( { todo, handleDelete } ) => {
    return (
      <div className="">
        <div class="flex flex-col ">
        {
            
          todo .length ?
          todo.map((v)=>(

           <TodoItems todo={v} />
          )) : <h1>No create yet</h1>
        }
        </div>
      </div>
    )
  }
  
  export default Todo;
