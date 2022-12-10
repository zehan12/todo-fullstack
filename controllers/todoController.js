const Todo = require("../models/Todo");
const User = require("../models/User");
const { errorMessage, successMessage, status } = require("../utils/status");
const { empty } = require("../utils/validation")

const createTodo = async (req, res, next) => {
    const { userId } = req.user
    console.log(userId, "id")
    const { title, description } = req.body;
    if (title.trim().length === 0) {
        errorMessage.error = "Enter title of Todo"
        return res.status(status.success).json(errorMessage)
    }
    if (description.trim().length === 0) {
        errorMessage.error = "Enter description of Todo"
        return res.status(status.success).json(errorMessage)
    }
    try {
        const author = userId;
        const todo = await Todo.create({ title, description, author });
        successMessage.todo = todo;
        return res.status(status.success).json(successMessage);
    } catch (error) {
        errorMessage.error = error.message
        return res.status(status.bad).json(errorMessage)
    }
}

const getAllTodo = async (req, res, next) => {
    try {
        const todos = await Todo.find({ author: req.user.userId })
        successMessage.todos = todos
        res.status(status.success).json(successMessage);
    } catch (error) {
        errorMessage.error = error.message
        return res.status(status.bad).json(errorMessage)
    }
}

const deleteTodo = async (req, res, next) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findOneAndDelete(id)
        if (!todo) {
            errorMessage.error = "Todo not found to delete"
            return res.status(status.bad).json(errorMessage)
        }
        successMessage.todo = todo;
        successMessage.deleted = true;
        return res.status(status.success).json(successMessage)
    } catch (error) {
        errorMessage.error = error.message
        return res.status(status.bad).json(errorMessage)
    }
}

const updateTodo = async (req, res, next) => {
    try {

        const body = {};
        if (req.body) {
            if (!empty(req.body.description)) {
                body.description = req.body.description;
            }
            if (!empty(req.body.title)) {
                body.title = req.body.title;
            }
        }

        const { id } = req.params;
        const { userId } = req.user;
        const todo = await Todo.findOneAndUpdate(
            {
                id,
                author: userId
            },
            {
                $set: body
            },
            {
                new: true
            }
        );
        successMessage.todo = todo
        res.status(status.success).json(successMessage)
    } catch (error) {
        errorMessage.error = error.message
        res.status(status.bad).json(errorMessage);
    }
}

const getTodo = async (req, res, next) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findById(id);
        successMessage.todo = todo
        res.status(status.success).json(successMessage)
    } catch (error) {
        errorMessage.error = error.message
        res.status(status.bad).json(errorMessage);
    }
}

const isCompletedTodo = async ( req, res, next ) => {
    console.log(req.method, req.body);
    try {
        const { id } = req.params;
        console.log(id,"id")
        // const { }
    } catch ( error ) {
        errorMessage.error = error.message
        res.status(status.bad).json(errorMessage);
    }
}

module.exports = {
    createTodo,
    getAllTodo,
    deleteTodo,
    updateTodo,
    getTodo,
    isCompletedTodo
}