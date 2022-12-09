import { useState } from "react";
import Confetti from "react-confetti";
import Button from "../components/Button";
import Modal from "../components/Model";
import Title from "../components/Title";
import Todo from "../components/Todo";
import TodoForm from "../components/TodoForm";

const Home = () => {
    const initialState = { title: "", description: "" }
    const [todo, setTodo] = useState([]);
    const [task, setTask] = useState(initialState);
    const [error, setError] = useState("");
    const [isOpen , setIsOpen] =useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const { title, description } = task
        const todos = { title, description, id: Date.now() }
        setTodo([...todo, todos]);
        setTask(initialState)
    }

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setError( value.trim().length ? `Please Enter the Field ${name}` : "" )
        setTask({ ...task, [name]: value })
        console.log(task)
    }

    const handleOpen = ( ) => {
        setIsOpen(!isOpen)
    }
    console.log(task, "value", todo)

    return (
        <div className="bg-green-400 m-auto text-center h-full">
            
             <Modal isOpen={isOpen} handleOpen={handleOpen} /> 
            <h1>Home</h1>
            <h1>{error && error}</h1>
           
            {/* <Confetti  /> */}
            <Title text={"todo list"} />
            <Button text={"Add Todo"} 
                handleFunction={handleOpen}
            />
            <TodoForm
                handleChange={handleChange}
                title={task.title}
                description={task.description}
            />
              {/* <Modal /> */}
            <Todo todo={todo} />
        </div>
    )
}

export default Home;