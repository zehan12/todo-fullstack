const router = require("express").Router();
const userFunction = require("../controllers/usersController");
const auth = require("../middleware/auth");

router.post('/signup', userFunction.createUser );

router.post('/login', userFunction.siginUser );

router.post("/get", auth.verifyToken,  userFunction.getUser )


module.exports = router;
