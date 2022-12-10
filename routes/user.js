const router = require("express").Router();
const userFunction = require("../controllers/usersController");

router.post('/signup', userFunction.createUser);

router.post('/login', userFunction.siginUser);


module.exports = router;