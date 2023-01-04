const router = require("express").Router();
const userFunction = require("../controllers/usersController");
const auth = require("../middleware/auth");

router.post('/signup', userFunction.createUser );

router.post('/login', userFunction.siginUser );

router.get("/get", auth.verifyToken,  userFunction.getUser );

router.delete("/logout", userFunction.logout );


module.exports = router;
