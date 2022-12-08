const Todo = require("../models/Todo");
const router = require("express").Router();

// router.get("/",  async( req, res, next ) => {
//     console.log("all todos route");
//     res.json({message:"all todos"})
// } );



const getAllTodo = async (req, res, next) => {
    console.log("all todos route");
    const todos = await Todo.find();
    res.status(200).json({todos});
}
router.get("/", getAllTodo)

const createTodo = async (req, res, next) => {
    const { title, isCompleted } = req.body;
    const todo = await Todo.create(title,isCompleted)
    console.log(`Todo created ${todo}`);
    res.status(200).json({todo})
}
router.post("/", createTodo)

const deleteTodo = async (req, res, next) => {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);
    console.log(`${todo} is deleted`);
    res.status(200).json({todo});
}
router.delete("/:id", deleteTodo)

const updateTodo = async (req, res, next) => {
    console.log("updating a todo");
    const { id } = req.params;
    res.json({ message: `${id} todo is updated` })
}
router.put("/:id", updateTodo);



module.exports = router;