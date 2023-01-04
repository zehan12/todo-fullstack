import { Fragment } from "react";
const TodoItems = ({ todo }) => {
    return (
        <Fragment>
            <div className="w-[50%] mx-auto border-2 h-32 my-2 pt-3 px-3 shadow-lg"
                style={{
                    backgroundColor: "#F4F4F4",
                    fontFamily: "sans-serif",
                    textAlign: "center"
                }}>
                <div class="flex mb-4 align-middle m-2 items-center">
                    <div
                        className="flex flex-col text-left w-full p-4  "
                    >
                        <p class="w-full text-grey-darkest text-2xl font-mono capitalize font-bold">
                            {todo.title}
                        </p>
                        <p className="font-mono">{todo.description}</p>
                        <p>{todo.createdAt}</p>
                    </div>
                    <button
                        class="flex-no-shrink p-2 ml-4 mr-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                    >
                        Edit
                    </button>
                    <button
                        class="flex-no-shrink p-2 ml-4 mr-2 w-full bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                        { 
                        todo.isCompleted ? "completed" : "not completed"
                        }
                    </button>
                    <button
                        class="flex-no-shrink p-2 ml-2 bg-red-800 text-white rounded-lg hover:bg-red-900"
                    >
                        Remove
                    </button>
                </div>
            </div>

        </Fragment>

    )
}

export default TodoItems;