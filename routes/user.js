const router = require("express").Router();
const userFunction = require("../controllers/usersController");
const auth = require("../middleware/auth");

router.post('/signup', userFunction.createUser );

router.post('/login', userFunction.siginUser );

<<<<<<< HEAD
router.get("/get", auth.verifyToken,  userFunction.getUser );

router.delete("/logout", userFunction.logout );
=======
router.get("/get", auth.verifyToken,  userFunction.getUser )
>>>>>>> cd19febd9bf59a9cb4f9feeb668962fcc365f380


module.exports = router;
