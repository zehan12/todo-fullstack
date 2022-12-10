const router = require("express").Router();
var auth = require("../middleware/auth");
const todoFunction = require("../controllers/todoController");



router.get("/", auth.verifyToken, todoFunction.getAllTodo)


router.post("/", auth.verifyToken , todoFunction.createTodo);


router.delete("/:id", auth.verifyToken, todoFunction.deleteTodo)


router.put("/:id", auth.verifyToken, todoFunction.updateTodo);



module.exports = router;