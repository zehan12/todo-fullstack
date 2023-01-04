import { useState, useContext } from "react";
import { StateContext } from "../store/UserContextReducer";
import Confetti from "react-confetti";
import Button from "../components/Button";
import Modal from "../components/Model";
import Title from "../components/Title";
import Todo from "../components/Todo";
import TodoForm from "../components/TodoForm";
import BASE_URL from "../utils/constant";
import { useEffect } from "react";
import TodoFilterNav from "../components/TodoFilterNav";

const Home = () => {
    const { state } = useContext(StateContext);
    const initialState = { title: "", description: "" }
    const [todo, setTodo] = useState([]);
    const [task, setTask] = useState(initialState);
    const [error, setError] = useState("");
    const [isOpen, setIsOpen] = useState(false)


    const getTodos = async () => {
        // const { token } = JSON.parse(localStorage["user_token"])
        // const Token  = localStorage["user_token"] ? localStorage["user_token"] : "";
        const Token = localStorage["user_token"] ? localStorage["user_token"] : "";
        console.log(Token, "in getToodo")

        const res = await fetch(BASE_URL + "/todo", {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': Token
            },
        })

        const data = await res.json()
        setTodo(data.todos)
        console.log(data, "data get todos")
    }

    useEffect(() => { getTodos() }, [])


    const handleDelete = (id) => {

    }


    // console.log(state, "home component")
    const handleSubmit = (e) => {
        e.preventDefault();
        const { title, description } = task
        const todos = { title, description, id: Date.now() }
        setTodo([...todo, todos]);
        setTask(initialState)
    }

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setError(value.trim().length ? `Please Enter the Field ${name}` : "")
        setTask({ ...task, [name]: value })
        // console.log(task)
    }

    const handleOpen = (val) => {
        setIsOpen(!isOpen)
        // console.log(val,"here the value")
        if (val) return getTodos()
    }
    // console.log(task, "value", todo)

    return (
        <div className="m-auto text-center h-full">

            <Modal isOpen={isOpen} handleOpen={handleOpen} />

            <h1>{error && error}</h1>

            {/* <Confetti  /> */}
            <Title text={"todos"} />
            <Button text={"Create Todo"}
                handleFunction={handleOpen}
            />
            <TodoFilterNav />
            {/* <TodoForm
                handleChange={handleChange}
                title={task.title}
                description={task.description}
            /> */}

            {/* <Title text={"todo list"} /> */}

            {/* <Modal /> */}
            {

            }
            <Todo todo={todo} />
        </div>
    )
}

export default Home;