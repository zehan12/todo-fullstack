import { useState, useContext } from "react";
import { StateContext } from "../store/UserContextReducer";
import Button from "../components/Button";
import Modal from "../components/Model";
import Title from "../components/Title";
import Todo from "../components/Todo";
import { Token, BASE_URL } from "../utils/constant";
import { useEffect } from "react";
import TodoFilterNav from "../components/TodoFilterNav";
<<<<<<< HEAD
=======
import toast from 'react-hot-toast';


>>>>>>> cd19febd9bf59a9cb4f9feeb668962fcc365f380

const Home = () => {
    const { state } = useContext(StateContext);
    const initialState = { title: "", description: "" }
    const [todo, setTodo] = useState([]);
    const [task, setTask] = useState(initialState);
    const [error, setError] = useState("");
    const [ isOpen, setIsOpen ] = useState(false)



    const getTodos = async () => {
<<<<<<< HEAD
        // const { token } = JSON.parse(localStorage["user_token"])
        // const Token  = localStorage["user_token"] ? localStorage["user_token"] : "";
        const Token = localStorage["user_token"] ? localStorage["user_token"] : "";
        console.log(Token, "in getToodo")
=======
        console.log(localStorage,"loc at get")
>>>>>>> cd19febd9bf59a9cb4f9feeb668962fcc365f380

        const res = await fetch(BASE_URL + "/todo", {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
<<<<<<< HEAD
                'Authorization': Token
=======
                authorization: Token
>>>>>>> cd19febd9bf59a9cb4f9feeb668962fcc365f380
            },
        })

        console.log(res,Token)
        const data = await res.json()
        console.log(data.todos,data)
        setTodo(data.todos)
<<<<<<< HEAD
        console.log(data, "data get todos")
    }

    useEffect(() => { getTodos() }, [])


    const handleDelete = (id) => {
=======
        // console.log(data, "data get todos")
    }



    useEffect(() => { getTodos() }, [])


    const handleDelete = async (id) => {
        console.log(id)
        const res = await fetch(BASE_URL + `/todo/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                authorization: Token
            },
        })
>>>>>>> cd19febd9bf59a9cb4f9feeb668962fcc365f380

        const data = await res.json()
        if (data.deleted) {
            toast.success(`Todo ${data.todo.title} is deleted`)
        } else {
         
            toast.error( `todo not deleted due to ${data.error}`,{
                style: {
                  border: '1px solid #f4f0ed',
                  padding: '16px',
                  color: '#060606',
                },
                iconTheme: {
                  primary: '#fd1c23',
                  secondary: '#FFFAEE',
                },
              })
        }


        getTodos()
    }


    // console.log(state, "home component")
    const handleSubmit = (e) => {
        e.preventDefault();
        const { title, description } = task
        const todos = { title, description, id: Date.now() }
        // setTodo([...todo, todos]);
        setTask(initialState)
    }

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setError(value.trim().length ? `Please Enter the Field ${name}` : "")
        setTask({ ...task, [name]: value })
<<<<<<< HEAD
        // console.log(task)
    }

    const handleOpen = (val) => {
        setIsOpen(!isOpen)
        // console.log(val,"here the value")
        if (val) return getTodos()
    }
    // console.log(task, "value", todo)
=======
       
    }

    const handleOpen = (val) => {
        setIsOpen(!isOpen)    
        if (val) {
            getTodos() 
        }   
    }
   
>>>>>>> cd19febd9bf59a9cb4f9feeb668962fcc365f380

  
    return (
<<<<<<< HEAD
        <div className="m-auto text-center h-full">
=======
        <div className=" m-auto text-center h-full">
>>>>>>> cd19febd9bf59a9cb4f9feeb668962fcc365f380

            <Modal isOpen={isOpen} handleOpen={handleOpen} />

            <h1>{error && error}</h1>

            {/* <Confetti  /> */}
<<<<<<< HEAD
            <Title text={"todos"} />
            <Button text={"Create Todo"}
                handleFunction={handleOpen}
            />
=======



            <Title text={"todo list"} />
            <Button text={"Add Todo"}
                handleFunction={handleOpen}
            />

>>>>>>> cd19febd9bf59a9cb4f9feeb668962fcc365f380
            <TodoFilterNav />
            {/* <TodoForm
                handleChange={handleChange}
                title={task.title}
                description={task.description}
            /> */}
<<<<<<< HEAD

            {/* <Title text={"todo list"} /> */}

            {/* <Modal /> */}
=======
>>>>>>> cd19febd9bf59a9cb4f9feeb668962fcc365f380
            {

            }
            <Todo
                handleDelete={handleDelete}
                todo={todo} />
        </div>
    )
}

export default Home;