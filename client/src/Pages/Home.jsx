import { useState } from "react";
import Button from "../components/Button";
import Title from "../components/Title";
import Todo from "../components/Todo";
import TodoForm from "../components/TodoForm";

const Home = ( ) => {
    const [ todo, setTodo ] = useState([]);

    const handleSubmit = ( e ) => {
        console.log("handle submit", e)
    }

    const handleChange = ( { target } ) => {
        const { name, value } = target;
        console.log(name, value)
    }

     return (
        <div className="bg-green-400 m-auto text-center h-full">
            
            <h1>Home</h1>
            <Title text={"TODO"} />
            <TodoForm />
            <Button handleSubmit={handleSubmit} />
            <Todo />
        </div>
    )
}

export default Home;